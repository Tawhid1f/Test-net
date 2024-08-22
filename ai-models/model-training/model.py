import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam

def create_model():
    model = Sequential([
        Dense(64, activation='relu', input_shape=(input_shape,)),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])
    model.compile(optimizer=Adam(), loss='binary_crossentropy', metrics=['accuracy'])
    return model

def train_model(model, X_train, y_train, epochs=10):
    model.fit(X_train, y_train, epochs=epochs, batch_size=32)

def save_model(model, path):
    model.save(path)

if __name__ == "__main__":
    # Example: Load data and train model
    import numpy as np

    input_shape = 20  # Example input shape

    # Generating dummy data for example
    X_train = np.random.rand(1000, input_shape)
    y_train = np.random.randint(0, 2, size=(1000,))

    model = create_model()
    train_model(model, X_train, y_train)
    save_model(model, 'model.h5')
