require("dotenv").config();
const client = require("./connection/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Stripe = require("stripe");
const express = require("express");
const config = require("config");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.set("view engine", "ejs");

// const users = require("./router/users.js");
// app.use("/users", users);

// const projects = require("./router/projects.js");
// app.use("/projects", projects);

// const backed_projects = require("./router/backed_projects.js");
// app.use("/backed_projects", backed_projects);

// const profile = require("./router/profile.js");
// app.use("/profile", profile);

// const user_campaign = require("./router/user_campaign.js");
// app.use("/user_campaign", user_campaign);
app.get("/hello", (req, res) => {
  res.send("hello worldddddd");
});
const Investors = require("./router/Investors");
app.use("/Investors", Investors);
module.exports = app;

const profile = require("./router/profile.js");
app.use("/profile", profile);

const payment = require("./router/payment");
app.use("/payment", payment);
module.exports = app;

const Campaign = require("./router/Campaign");
app.use("/Campaign", Campaign);

// // router.post(
//   "/stripe",
//   express.raw({ type: "application/json" }),
//   async (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let event;
//     try {
//       event = await stripe.webhooks.constructEvent(
//         req.body,
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.error(err);
//       res.status(400).json({ message: err.message });
//     }

//     if (event.type === "payment_intent.created") {
//       console.log(`${event.data.object.metadata.name} initated payment!`);
//     }
//     // Event when a payment is succeeded
//     if (event.type === "payment_intent.succeeded") {
//       console.log(`${event.data.object.metadata.name} succeeded payment!`);
//       // fulfilment
//     }
//     res.json({ ok: true });
//   }
// );
