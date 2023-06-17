import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export default async function handler(req, res) {
  res.send("PD");
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter using your email service details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: email, // Replace with your recipient email address
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
