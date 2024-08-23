const { exec } = require('child_process');
const path = require('path');

exports.createVideo = (req, res) => {
    const { text } = req.body;

    // Python স্ক্রিপ্ট রান করানো হচ্ছে
    exec(`python3 ${path.join(__dirname, '../video_processor.py')} "${text}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('ভিডিও তৈরি করতে সমস্যা হয়েছে');
        }

        // তৈরি করা ভিডিওটি রেসপন্সে পাঠানো হচ্ছে
        res.download(path.join(__dirname, '../output_video.mp4'));
    });
};
