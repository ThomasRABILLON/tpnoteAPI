<template>
  <div>
    <h2>Création d'un questionnaire</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Titre:</label>
      <input v-model="text" placeholder="Titre" required />
      <button type="submit">Créer un questionnaire</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
    },
  },
};
</script>
