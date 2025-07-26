<!-- Temporary SignInButton component for development -->
<template>
  <button @click="handleSignIn" class="inline-flex items-center gap-2">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  asChild?: boolean
}>()

const handleSignIn = () => {
  // Temporary demo function
  alert('Sign in with Clerk - Configure your Clerk keys first!')
}
</script>
