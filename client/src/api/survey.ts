export type QuestionId = 'gender' | 'age' | 'hypertension' | 'heart_disease' | 'ever_married' | 'work_type' | 'residence_type' | 'avg_glucose_level' | 'bmi' | 'smoking_status';

export type SurveyQuestion = {
  title: string;
  next: QuestionId | null;
} & (
  | {
      type: "checkbox";
      options: string[];
    }
  | {
      type: "number";
    }
);

export interface SurveyResult {
  prediction: number;
  result: string;
}

const survey: { [question: string]: SurveyQuestion } = {
  gender: {
    title: "Por favor, especifique su genero",
    type: "checkbox",
    options: ["Hombre", "Mujer", "Otro"],
    next: "age",
  },
  age: {
    title: "Por favor, introduzca su edad",
    type: "number",
    next: "hypertension",
  },
  hypertension: {
    title: "¿Padece usted de hipertensión?",
    type: "checkbox",
    options: ["No", "Si"],
    next: "heart_disease",
  },
  heart_disease: {
    title: "¿Padece usted de una enfermedad cardíaca?",
    type: "checkbox",
    options: ["No", "Si"],
    next: "ever_married",
  },
  ever_married: {
    title: "¿Ha estado usted casado?",
    type: "checkbox",
    options: ["No", "Si"],
    next: "work_type",
  },
  work_type: {
    title: "Indique la opción que mejor describa su trabajo",
    type: "checkbox",
    options: [
      "Trabajo en una institución gubernamental",
      "Nunca he trabajado",
      "Trabajo en una compañía privada",
      "Soy independiente",
      "Soy un niño",
    ],
    next: "residence_type",
  },
  residence_type: {
    title: "Indique la opción que mejor describa su tipo de residencia",
    type: "checkbox",
    options: ["Rural", "Urbana"],
    next: "avg_glucose_level",
  },
  avg_glucose_level: {
    title:
      "Ingrese su último nivel de glucosa conocido (si no lo conoce, ingrese 100)",
    type: "number",
    next: "bmi",
  },
  bmi: {
    title:
      "Ingrese su último índice de masa corporal conocido (si no lo conoce, ingrese 20)",
    type: "number",
    next: "smoking_status",
  },
  smoking_status: {
    title: "Indique la opción que mejor describa su relación con el cigarrillo",
    type: "checkbox",
    options: [
      "He fumado anteriormente",
      "Nunca he fumado",
      "Actualmente fumo",
      "No lo sé",
    ],
    next: null,
  },
};

export function useSurvey() {
  return {
    getQuestion(question: string): SurveyQuestion {
      return survey[question];
    },
  };
}
