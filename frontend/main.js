document.getElementById('create-video').addEventListener('click', function() {
    const text = prompt('Enter text for the video:');
    if (text) {
        fetch('/api/create-video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'output_video.mp4';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert('Video downloaded successfully!');
        })
        .catch(error => {
            console.error('Error creating video:', error);
        });
    }
});
