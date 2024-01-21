<script setup lang="ts">
definePageMeta({
  middleware: ["sanctum:auth"],
})

const { isAuthenticated, user } = useSanctumAuth();
</script>

<template>
  <section>
    <div class="container">
      <h1>Dashboard</h1>
      <p>Your authentication status - {{ isAuthenticated }}</p>
      <p>Identity object - {{ user }}</p>
    </div>
  </section>
</template>