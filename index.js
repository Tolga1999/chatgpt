const express = require('express');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/test', async (req, res) => {
    try {
        return res.status(200).json({
            message: 'working',
        })
    } catch (error) {

    }
});

const port = process.env.PORT || 3000;

// which port express listens
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});