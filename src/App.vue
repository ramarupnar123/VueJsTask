<template>
  <CardPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardPage from './views/CardsPage.vue';  // Adjust the path if necessary

export default defineComponent({
  components: {
    CardPage
  }
});
</script>

<style scoped>
/* You can remove styles or add global styles for the entire app */
</style>
