# Predict Stroke Agent

This agent takes a pre-trained
[stroke classifier model](https://deepnote.com/workspace/analisisbasesdatos-2022-2-339383a9-49b0-4ddf-b879-c5351e214dee/project/ProyectoFinal-3f301f45-2937-4b74-831b-49bad9ea8817)
to deliver a prediction of whether a person might suffer a stroke, based on a
series of input parameters.

## Installation

## Usage

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
