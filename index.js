const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();

app.use(cors())
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
    const message = await req.body.input
    console.log(message)
    try {
        const response = await openai.completions.create({
            model: 'davinci-002',
            prompt: message,
            max_tokens: 60,
        })

        return res.status(200).json({
            success: true,
            message: response.choices[0].text
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : error.message || "there was an issue on the server",
        })
    }
});

const port = process.env.PORT || 3000;

// which port express listens
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});