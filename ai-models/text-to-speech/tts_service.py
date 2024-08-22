from gtts import gTTS
import os

def generate_speech(text, output_path):
    tts = gTTS(text=text, lang='en')
    tts.save(output_path)

if __name__ == "__main__":
    sample_text = "Hello, this is a sample text to speech conversion."
    output_path = os.path.join(os.getcwd(), "sample_speech.mp3")
    generate_speech(sample_text, output_path)
