<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
    <div class="flex items-center gap-4">
      <MobileSidebarController />
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Icon name="lucide:brain-circuit" class="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 class="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {{ route.meta.title || "Dashboard" }}
        </h3>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <Button variant="outline" size="sm" class="hidden sm:flex items-center gap-2">
        <Icon name="lucide:search" class="w-4 h-4" />
        Search
      </Button>
      <SettingsButton />
      <ClientOnly>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClientOnly>
    </div>
  </div>
</template>
