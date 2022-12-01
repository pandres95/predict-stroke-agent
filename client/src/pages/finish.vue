<template>
  <section>
    <img
      src="https://www.maropeng.co.za/uploads/imager/files/19876/brain-512758_960_720_afef620cc5622511447db0fd14cf5cfe.png"
      alt="human brain"
    />

    <h1>Sistema de predicción de accidentes cerebrovasculares</h1>
    <div v-if="!survey.result.prediction">
      <p>
        ¡Felicitaciones! De acuerdo a esta evaluación, usted tiene bajas
        probabilidades de sufrir un accidente cerebrovascular.
      </p>
      <p>Aún así, le recomendamos seguir un estilo de vida saludable.</p>
    </div>
    <div v-else>
      <p>
        De acuerdo a esta evaluación, existen altas probabilidades de que usted
        pueda sufrir de un accidente cerebrovascular.
      </p>
      <p>
        Te recomendamos mantener hábitos de vida saludables, así como acudir a
        un médico para que evalúe más a fondo tus condiciones de salud.
      </p>
    </div>

    <Button @click.prevent="reset">
      Comenzar de nuevo
    </Button>
  </section>
</template>

<script lang="ts" setup>
import { useSurveyStore } from "@/stores/survey";
const survey = useSurveyStore();

function reset () {
  survey.$reset();
  navigateTo('/');
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
}

img {
  width: 40%;
  max-width: 50vw;
}
</style>
