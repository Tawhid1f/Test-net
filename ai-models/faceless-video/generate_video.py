from moviepy.editor import *
from gtts import gTTS
import os

def create_video_with_voiceover(text, output_path):
    tts = gTTS(text=text, lang='en')
    voiceover_path = os.path.join(os.getcwd(), "voiceover.mp3")
    tts.save(voiceover_path)

    # Create a white background video
    video = ColorClip(size=(640, 480), color=(255, 255, 255), duration=10)
    video = video.set_audio(AudioFileClip(voiceover_path))

    # Save the final video
    video.write_videofile(output_path, codec='libx264')
    os.remove(voiceover_path)

if __name__ == "__main__":
    # Example text
    sample_text = "This is a faceless video generated using AI."
    output_path = os.path.join(os.getcwd(), "faceless_video.mp4")
    create_video_with_voiceover(sample_text, output_path)
