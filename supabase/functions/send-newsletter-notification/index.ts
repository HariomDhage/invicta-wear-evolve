import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
  type: 'notify' | 'early_access';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, type }: NewsletterRequest = await req.json();

    console.log(`Processing ${type} signup for email: ${email}`);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Save to newsletter_signups table
    const { data: signup, error: signupError } = await supabase
      .from('newsletter_signups')
      .insert({ email })
      .select()
      .single();

    if (signupError && !signupError.message.includes('duplicate key')) {
      console.error("Error saving newsletter signup:", signupError);
      return new Response(
        JSON.stringify({ error: "Failed to save signup" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "InvictaWears <noreply@invictawears.club>",
      to: ["info@invictawears.club"],
      subject: `New ${type === 'notify' ? 'Notify Me' : 'Early Access'} Signup - InvictaWears`,
      html: `
        <h1>New Newsletter Signup</h1>
        <p><strong>Type:</strong> ${type === 'notify' ? 'Notify Me' : 'Early Access'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>This person is interested in being notified about InvictaWears launch.</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "InvictaWears <noreply@invictawears.club>",
      to: [email],
      subject: "Thanks for signing up - InvictaWears",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; text-align: center;">Welcome to InvictaWears!</h1>
          <p>Thank you for your interest in InvictaWears premium activewear.</p>
          <p>We'll notify you as soon as we launch with exclusive early access and special pricing.</p>
          <p>Get ready for premium activewear designed for the unstoppable!</p>
          <div style="text-align: center; margin: 30px 0;">
            <p style="margin: 10px 0;"><strong>Follow us on social media:</strong></p>
            <a href="https://www.instagram.com/invictawears?igsh=MWphYTZvZTFlbXgyMw%3D%3D&utm_source=qr" style="margin: 0 10px; text-decoration: none; color: #1a1a1a;">Instagram</a>
            <a href="https://www.facebook.com/share/16o8xWrfUZ/?mibextid=wwXIfr" style="margin: 0 10px; text-decoration: none; color: #1a1a1a;">Facebook</a>
          </div>
          <p style="color: #666; font-size: 14px; text-align: center;">
            Best regards,<br>
            The InvictaWears Team
          </p>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("User email sent:", userEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Newsletter signup successful",
      adminEmail: adminEmailResponse,
      userEmail: userEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);