<template>
  <section id="survey-{{question}}">
    <h1>
        Sistema de predicción de accidentes cerebrovasculares
    </h1>
    <p>
        {{surveyQuestion.title}}
    </p>

    <div class="question" v-if="surveyQuestion.type === 'checkbox'">
        <div v-for="(option, ix) in surveyQuestion.options" :key="ix">
            <input name="option" type="radio" :value="ix"> {{option}}
        </div>
    </div>
    <div v-else-if="surveyQuestion.type === 'number'">
        <input type="number" />
    </div>

    <Button @click.prevent="next">
        Siguiente
    </Button>
  </section>
</template>

<script lang="ts" setup>
import { useSurvey } from '@/api/survey';
import { useSurveyStore } from '@/stores/survey';

const route = useRoute();
const surveyApi = useSurvey();
const surveyStore = useSurveyStore();

const question: string = `${route.params['question']}`;
const surveyQuestion = surveyApi.getQuestion(question);

async function next() {
    const nextQuestion = surveyQuestion.next;

    if (nextQuestion !== null) {
        navigateTo(`/survey/${nextQuestion}`);
    } else {
        navigateTo(`/finish`);
    }
}
</script>

<style scoped>
input[type=number] {
    margin-block-start: 0.5em;
    font-size: 1.5em;
}
</style>
