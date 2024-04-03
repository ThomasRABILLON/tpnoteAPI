<template>
  <div>
    <h2>{{ questionnaire.title }}</h2>
    <!-- D'autres détails du questionnaire ici -->
  </div>
</template>

<script setup>
props: {
  questionnaire: Object;
}
</script>

<style scoped>
/* Vos styles ici */
</style>
