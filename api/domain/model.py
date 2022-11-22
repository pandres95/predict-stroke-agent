from domain.singleton import singleton

import xgboost as xgb
import pandas as pd
import pickle


@singleton
class Model:
    model: xgb.sklearn.XGBClassifier

    def __init__(self):
        with open('domain/classifier.pkl', 'rb') as f:
            self.model = pickle.load(f)

    def preprocess(self, parameters):
        data = pd.DataFrame({'gender': [], 'age': [], 'hypertension': [], 'heart_disease': [],
                             'ever_married': [], 'work_type': [], 'Residence_type': [],
                             'avg_glucose_level': [], 'bmi': [], 'smoking_status': []})
        data.loc[0] = [
            parameters['gender'],
            parameters['age'],
            parameters['hypertension'],
            parameters['heart_disease'],
            parameters['ever_married'],
            parameters['work_type'],
            parameters['residence_type'],
            parameters['avg_glucose_level'],
            parameters['bmi'],
            parameters['smoking_status'],
        ]

        return data

    def predict(self, data):
        return self.model.predict(data)
