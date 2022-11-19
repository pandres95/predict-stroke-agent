from domain.singleton import singleton

import xgboost as xgb
import pandas as pd
import pickle

@singleton
class Model:
    model: xgb.sklearn.XGBClassifier
    
    def __init__ (self, path: str):
        with open (path, 'rb') as f:
            self.model = pickle.load(f)

    def predict(self, parameters):
        data = pd.Dataframe({'gender': [], 'age': [], 'hypertension': [], 'heart_disease': [],
                         'ever_married': [], 'work_type': [], 'Residence_type': [],
                         'avg_glucose_level': [], 'bmi': [], 'smoking_status': []})

        data.loc[0] = parameters
        
        self.model.predict(data)