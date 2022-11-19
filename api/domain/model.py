from domain.singleton import singleton

import xgboost as xgb
import pickle

@singleton
class Model:
    model: xgb.XGBModel
    
    def __init__ (self, path: str):
        with open (path, 'rb') as f:
            self.model = pickle.load(f)

    def predict(self, parameters):
        self.model.predict(parameters)