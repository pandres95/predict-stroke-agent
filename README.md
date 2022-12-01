# Predict Stroke Agent

|||
|:-|:-|
| Research paper    |[link](./Paper-IA-2022-2.pdf)                                  |
| Demo video        |[link](https://youtu.be/IvdUm4Av6TU)                           |
| Demo application  |[link](https://predict-stroke-agent-un2027631.netlify.app/)    |

This agent takes a pre-trained
[stroke classifier model](./StrokePrediction.ipynb)
to deliver a prediction of whether a person might suffer a stroke, based on a
series of input parameters.

### Input parameters

| Parameter             | Possible values                                                               |
| :-------------------- | :---------------------------------------------------------------------------- |
| `gender`              | 0 (Male), 1 (Female), 2 (Other)                                               |
| `age`                 | 1-127                                                                         |
| `hypertension`        | 0 (No), 1 (Yes)                                                               |
| `heart_disease`       | 0 (No), 1 (Yes)                                                               |
| `ever_married`        | 0 (No), 1 (Yes)                                                               |
| `work_type`           | 0 (Govt. Job), 1 (Never worked), 2 (Private), 3 (Self Employed), 4 (Children) |
| `residence_type`      | 0 (Rural), 1 (Urban)                                                          |
| `avg_glucose_level`   | 1-200                                                                         |
| `bmi`                 | body mass index                                                               |
| `smoking_status`      | 1 (formerly smoked), 2 (never smoked), 3 (smokes) or 0 (unknown)              |

## Contributors

- [Pablo Andrés Dorado Suárez](https://github.com/pandres95)
- [Pablo Gonzalez Baron](https://github.com/pgonzalezb4)
- [Daniel Ricardo Rodriguez Olarte](https://github.com/drodriguezol)
