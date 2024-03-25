<template>
  <div>
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Titre:</label>
      <input type="text" v-model="formData.title" required />
      <button type="submit">{{ submitButtonText }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["formData", "formTitle", "submitButtonText"],
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
    },
  },
};
</script>
