from typing import Dict
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
async def predict(params: Dict):
    data = Model().preprocess(params)
    [prediction] = Model().predict(data)

    if prediction == 1:
        result = 'There is a high chance that the patient will suffer a stroke.'
    else:
        result = 'There is a low chance that the patient will suffer a stroke.'

    return {
        "prediction": 0 if prediction == 0 else 1,
        "result": result
    }