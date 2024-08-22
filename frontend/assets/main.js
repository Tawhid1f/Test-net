document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateButton');

    button.addEventListener('click', () => {
        const text = document.getElementById('textInput').value;

        fetch('/api/create-video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        })
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'generated_video.mp4';
            link.click();
        })
        .catch(error => console.error('Error:', error));
    });
});
