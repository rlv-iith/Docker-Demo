const express = require('express');
const axios = require('axios');
const cors = require('cors'); // <-- 1. IMPORT CORS
const app = express();

app.use(cors()); // <-- 2. USE CORS MIDDLEWARE
app.use(express.json());

app.post('/call-python', async (req, res) => {
    try {
        console.log('Received request from frontend. Calling Python API...');
        const pythonResponse = await axios.post('http://python_api:5000/run', {
            input: req.body.input
        });
        console.log('Python API responded:', pythonResponse.data);
        res.json(pythonResponse.data);
    } catch (err) {
        console.error('Error calling Python API:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Node.js server running on port 3000'));