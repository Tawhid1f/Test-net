const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const { exec } = require('child_process');

// Route to create a video with voiceover
app.post('/api/create-video', (req, res) => {
    const { text } = req.body;

    // Execute the Python script
    exec(`python3 backend/video_processor.py "${text}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Video creation failed');
        }

        // Send the created video as a response
        res.download('backend/output_video.mp4');
    
      const connectDB = require('./db');

      // Connect to MongoDB
        connectDB();
        
     });
});
mongoose.connect('Your MongoDB Atlas Connection String', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const videoRoutes = require('./routes/videoRoutes');

// Routes Middleware
app.use('/api', videoRoutes);

require('dotenv').config();

// MongoDB সংযোগ
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




