// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const API_KEY = process.env.INTAKEQ_API_KEY; 
//     if (!API_KEY) throw new Error("Missing API Key");

//     const response = await fetch("https://intakeq.com/api/v1/appointments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Auth-Key": API_KEY,
//       },
//       body: JSON.stringify(req.body),
//     });

//     const data = await response.json();
//     if (!response.ok) throw new Error(data.error || "Failed to book appointment");

//     return res.status(200).json(data);
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// }
