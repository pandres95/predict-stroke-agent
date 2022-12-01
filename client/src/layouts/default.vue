<template>
  <div class="container">
    <main>
      <aside></aside>
      <div class="separator"></div>
      <aside class="content">
        <NuxtPage />
      </aside>
    </main>
    <footer>
      Proyecto desarrollado por Pablo Gonzalez Baron, Pablo Andres Dorado, y
      Daniel Ricardo Rodriguez.
    </footer>
  </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-rows: auto min-content;
    
    width: 100%;
    min-height: 100vh;
}

main {
    display: flex;

    grid-row: 1;
    padding: 1em;
}

main > aside {
    width: 50%;
}

main > aside.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 10%;
    flex-grow: 1;
}

main > .separator {
    border: 1px solid var(--clinic-secondary-50);
    height: 100%;
}

footer {
    grid-row: 2;
    padding: 2%;
    font-weight: 300;
    font-size: 0.75em;
    color: var(--clinic-secondary);
}
</style>
