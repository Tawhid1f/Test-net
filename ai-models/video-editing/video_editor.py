from moviepy.editor import *
import os

def add_audio_to_video(video_path, audio_path, output_path):
    video = VideoFileClip(video_path)
    audio = AudioFileClip(audio_path)
    video = video.set_audio(audio)
    video.write_videofile(output_path, codec='libx264')

if __name__ == "__main__":
    video_path = os.path.join(os.getcwd(), "background_video.mp4")
    audio_path = os.path.join(os.getcwd(), "background_audio.mp3")
    output_path = os.path.join(os.getcwd(), "final_video.mp4")
    add_audio_to_video(video_path, audio_path, output_path)
