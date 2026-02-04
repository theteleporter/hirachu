"use server";

type NewsletterState = {
  success: boolean;
  message?: string;
  error?: string;
} | null;

type ContactState = {
  success: boolean;
  message?: string;
  error?: string;
} | null;

export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email") as string;

  // Basic email validation
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    // For now, just log it
    console.log("Newsletter signup:", email);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true, message: "Successfully subscribed to newsletter!" };
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  if (!email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    // TODO: Connect to email service (SendGrid, Resend, etc.)
    console.log("Contact form:", { name, email, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
