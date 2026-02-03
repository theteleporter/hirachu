import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    // For now, just log it
    console.log("Newsletter signup:", email);

    // Store in a simple way (you could use a database or external service)
    // This is a placeholder - in production, integrate with your email provider

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
