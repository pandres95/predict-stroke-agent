import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    gender: 0,
    age: 0,
    hypertension: 0,
    heart_disease: 0,
    ever_married: 0,
    work_type: 0,
    Residence_type: 0,
    avg_glucose_level: 0,
    bmi: 0,
    smoking_status: 0,
  }),
})
