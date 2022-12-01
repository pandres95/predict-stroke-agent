<template>
  <section>
    <img
      src="https://www.maropeng.co.za/uploads/imager/files/19876/brain-512758_960_720_afef620cc5622511447db0fd14cf5cfe.png"
      alt="human brain"
    />
    
    <h1>Sistema de predicción de accidentes cerebrovasculares</h1>
    <p>
      Agradecemos su participación dentro de esta encuesta que permitirá
      predecir la probabilidad de sufrir un accidente cerebrovascular en el
      futuro.
    </p>
    <p>
      Para llevar correctamente a cabo la evaluación, se espera que sus
      respuestas sean honestas. Recuerde que ningún dato que ingrese aquí será
      almacenado ni compartido con terceros, sino que será usado únicamente para
      poder completar el proceso de evaluación.
    </p>

    <Button @click="start"> Continuar </Button>
  </section>
</template>

<script>
export default {
  methods: {
    async start() {
      await navigateTo("/survey/gender");
    },
  },
};
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
