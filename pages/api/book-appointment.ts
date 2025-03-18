// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { practitionerId, clientId, serviceId, locationId, status, date, reminderType } = req.body;

//   // Validate required fields
//   if (!practitionerId || !clientId || !serviceId || !locationId || !status || !date || !reminderType) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   try {
//     const timestamp = new Date(date).getTime();
//     const response = await fetch("https://intakeq.com/api/v1/appointments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Auth-Key": process.env.INTAKEQ_API_KEY as string, // Secure API Key from .env.local
//       },
//       body: JSON.stringify({
//         PractitionerId: practitionerId,
//         ClientId: clientId,
//         ServiceId: serviceId,
//         LocationId: locationId,
//         Status: status, // "Confirmed" or "WaitingConfirmation"
//         UtcDateTime: timestamp, // Unix timestamp in milliseconds
//         SendClientEmailNotification: true,
//         ReminderType: reminderType, // "Sms", "Email", "Voice", "OptOut"
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || "Failed to book appointment");
//     }

//     return res.status(200).json({ success: true, appointmentId: data.Id });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// }
