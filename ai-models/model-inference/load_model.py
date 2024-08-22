import tensorflow as tf

def load_model(path):
    model = tf.keras.models.load_model(path)
    return model

def predict(model, input_data):
    return model.predict(input_data)

if __name__ == "__main__":
    model = load_model('model.h5')
    # Example prediction
    import numpy as np
    input_data = np.random.rand(1, 20)  # Example input
    prediction = predict(model, input_data)
    print(f"Prediction: {prediction}")
