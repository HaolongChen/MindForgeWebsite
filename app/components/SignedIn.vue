<!-- Temporary Clerk component replacements for development -->
<template>
  <div v-if="authStore.isSignedIn">
    <slot />
  </div>
</template>

<script setup lang="ts">
// For now, we'll hide SignedIn content by default
const authStore = { isSignedIn: false }
</script>
