import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { QuestionId, SurveyResult } from "../api/survey";

export const useSurveyStore = defineStore("survey", {
  state: () => ({
    survey: useStorage("survey", {
      gender: undefined,
      age: undefined,
      hypertension: undefined,
      heart_disease: undefined,
      ever_married: undefined,
      work_type: undefined,
      residence_type: undefined,
      avg_glucose_level: undefined,
      bmi: undefined,
      smoking_status: undefined,
    } as { [key: string]: number | undefined }),
    result: useStorage("result", {} as SurveyResult),
  }),
  actions: {
    setQuestion(question: QuestionId, response: number) {
      this.survey[question] = response;
    },
    setResult(result: SurveyResult) {
      this.result = result;
    },
  },
});
