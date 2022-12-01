<template>
  <div class="button" @click="click">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  emits: ["click"],
  setup(_, { emit }) {
    return {
      click(evt: MouseEvent) {
        return emit("click", evt);
      },
    };
  },
};
</script>

<style>
.button {
  text-align: center;
  display: inline-block;

  margin-top: 0.75em;
  padding: 0.5em 0.8em;

  cursor: pointer;

  background-color: white;
  color: var(--clinic-secondary);
  box-shadow: 0 0.2em var(--clinic-secondary);

  font-weight: bold;
  font-size: 1.25em;
}

.button:active {
  box-shadow: none;
  position: relative;
  top: 0.2em;
}
</style>
