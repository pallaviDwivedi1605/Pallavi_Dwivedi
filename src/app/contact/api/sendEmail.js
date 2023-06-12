import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter using your email service details
    const transporter = nodemailer.createTransport({
      service: "YourEmailService",
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: "your-email@example.com",
        to: "dpallavi854@gmail.com", // Replace with your recipient email address
        subject: "New Contact Form Submission",
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
