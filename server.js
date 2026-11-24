const express=require('express');
const cors=require('cors');
const { GoogleGenAI } =require('@google/genai');
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());
const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});
app.post("/api/chat",async(req,res)=>{
    try
    {
        const userMessage = req.body.message;
        const response=await ai.models.generateContent({
            model:"gemini-3.5-flash-lite",
            contents:userMessage
        });
        res.json({
            reply:response.text
        });
    }
        catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong with Gemini."
        });
    }
});
// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
