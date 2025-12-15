const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1️⃣ Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 2️⃣ Create Donation Order (Frontend calls this)
// 2️⃣ Create Donation Order
app.post("/create-order", async (req, res) => {

  // ADD THESE TWO LINES ⬇️
  console.log("🔥 /create-order HIT");
  console.log("Request Body:", req.body);

  const { amount, donorName, donorEmail } = req.body;

  try {
    const options = {
      amount: amount * 100, // Razorpay accepts paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    console.log("🔥 Razorpay Order Response:", order);


    res.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ success: false });
  }
}); 

// 3️⃣ Payment Success Webhook (Frontend calls after payment)
app.post("/payment-success", async (req, res) => {
  const { donorName, donorEmail, amount, orderId, paymentId } = req.body;

  try {
    // 4️⃣ Send Email to Donor
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
      <h2>Thank You for Your Donation!</h2>
      <p>Dear <b>${donorName}</b>,</p>
      <p>Your donation of <b>₹${amount}</b> has been received successfully.</p>

      <h3>Your Donation Receipt</h3>
      <p><b>Order ID:</b> ${orderId}</p>
      <p><b>Payment ID:</b> ${paymentId}</p>

      <br/>
      <p>We truly appreciate your support ❤️</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: donorEmail,
      subject: "Thank You for Your Donation!",
      html: emailHtml,
    });

    res.json({ success: true });

  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ success: false, error: "Email not sent" });
  }
});

// Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
