import React, { useState } from 'react';

function VideoForm() {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // API কলের লজিক এখানে হবে
    };

    return (
        <div className="video-form">
            <h1>Create a Video</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text for video"
                    rows="4"
                    cols="50"
                ></textarea>
                <button type="submit">Generate Video</button>
            </form>
        </div>
    );
}

export default VideoForm;
