<template>
  <header>
    <section class="container">
      <!--<NuxtImg src="/images/logo.png" format="webp" class="w-24 lg:w-32" />-->
      <h1>Hello</h1>
    </section>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <section class="container bg-red-50 space-x-1">
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/test">Test</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </section>
  </footer>
</template>

<script setup lang="ts">
const { isAuthenticated, logout } = useSanctumAuth();
</script>