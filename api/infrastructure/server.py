from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from domain.model import Model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['POST'],
    allow_headers=['Content-Type'],
)

@app.post('/predict')
async def predict(params: List):
    [prediction] = Model('domain/classifier.pkl').predict(params)

    return {
        "prediction": prediction
    }