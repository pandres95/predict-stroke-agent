<template>
  <section id="survey-{{question}}">
    <h1>Sistema de predicción de accidentes cerebrovasculares</h1>
    <p>
      {{ surveyQuestion.title }}
    </p>

    <div class="question" v-if="surveyQuestion.type === 'checkbox'">
      <div v-for="(option, ix) in surveyQuestion.options" :key="ix">
        <input name="option" type="radio" :value="ix" v-model="response" />
        {{ option }}
      </div>
    </div>
    <div v-else-if="surveyQuestion.type === 'number'">
      <input type="number" v-model="response" />
    </div>

    <Button @click.prevent="next"> Siguiente </Button>
  </section>
</template>

<script lang="ts" setup>
import { useSurvey } from "@/api/survey";
import type { QuestionId } from "@/api/survey";
import { useSurveyStore } from "@/stores/survey";

const config = useRuntimeConfig();
const route = useRoute();
const surveyApi = useSurvey();
const surveyStore = useSurveyStore();

const question: QuestionId = route.params["question"] as QuestionId;
const response = ref<number>(surveyStore.$state.survey[question]);
console.log(surveyStore.survey, question, response);

const surveyQuestion = surveyApi.getQuestion(question);

async function next() {
  console.log(response.value);

  if (response.value === undefined) {
    // TODO: Add validation message
    return;
  }

  surveyStore.setQuestion(question, response.value);
  const nextQuestion = surveyQuestion.next;

  if (nextQuestion !== null) {
    navigateTo(`/survey/${nextQuestion}`);
  } else {
    const response = await fetch(new URL("/predict", config.public.apiUrl), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...surveyStore.survey }),
    });

    surveyStore.setResult(await response.json());
    navigateTo("/finish");
  }
}
</script>

<style scoped>
input[type="number"] {
  margin-block-start: 0.5em;
  font-size: 1.5em;
}
</style>
