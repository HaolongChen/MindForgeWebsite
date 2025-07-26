<script lang="ts" setup>
definePageMeta({
  layout: 'user',
  title: 'Diaries - MindForge',
})

useHead({
  title: 'Diaries - MindForge',
  meta: [
    { name: 'description', content: 'Your personal journal entries - capture your thoughts and reflections.' }
  ]
})

// Sample diary entries - replace with real data
const diaryEntries = ref([
  {
    id: 1,
    title: "Morning Reflections",
    excerpt: "Started the day with clarity about my goals and aspirations. The sunrise reminded me of new beginnings...",
    date: "2025-07-26",
    wordCount: 453,
    mood: "optimistic"
  },
  {
    id: 2,
    title: "Creative Writing Session",
    excerpt: "Explored new narrative techniques today. The story is taking an unexpected turn that feels authentic...",
    date: "2025-07-25",
    wordCount: 612,
    mood: "inspired"
  },
  {
    id: 3,
    title: "Weekend Adventures",
    excerpt: "Spent time in nature, hiking through the forest trails. The peace and quiet helped me think more clearly...",
    date: "2025-07-24",
    wordCount: 328,
    mood: "peaceful"
  },
])

const getMoodColor = (mood: string) => {
  const colors = {
    optimistic: 'text-green-500 bg-green-500/10',
    inspired: 'text-purple-500 bg-purple-500/10',
    peaceful: 'text-blue-500 bg-blue-500/10',
    thoughtful: 'text-orange-500 bg-orange-500/10',
    energetic: 'text-red-500 bg-red-500/10'
  }
  return colors[mood as keyof typeof colors] || 'text-gray-500 bg-gray-500/10'
}

const createNewEntry = () => {
  // For demo purposes, navigate to a sample entry
  navigateTo('/diaries/new')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
    <div class="px-6 py-8">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-4xl font-bold text-foreground mb-2">Your Diaries</h1>
            <p class="text-lg text-muted-foreground">Capture your thoughts and reflections</p>
          </div>
          <Button @click="createNewEntry" class="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Icon name="lucide:plus" class="w-4 h-4 mr-2" />
            New Entry
          </Button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:file-text" class="w-8 h-8 text-primary" />
              <span class="text-2xl font-bold text-foreground">{{ diaryEntries.length }}</span>
            </div>
            <h3 class="font-semibold text-foreground">Total Entries</h3>
            <p class="text-sm text-muted-foreground">Your journal collection</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:type" class="w-8 h-8 text-green-500" />
              <span class="text-2xl font-bold text-foreground">{{ diaryEntries.reduce((sum, entry) => sum + entry.wordCount, 0).toLocaleString() }}</span>
            </div>
            <h3 class="font-semibold text-foreground">Words Written</h3>
            <p class="text-sm text-muted-foreground">Total word count</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:calendar-days" class="w-8 h-8 text-purple-500" />
              <span class="text-2xl font-bold text-foreground">3</span>
            </div>
            <h3 class="font-semibold text-foreground">This Week</h3>
            <p class="text-sm text-muted-foreground">Recent entries</p>
          </div>
        </div>

        <!-- Entries Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="entry in diaryEntries"
            :key="entry.id"
            class="group bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
            @click="navigateTo(`/diaries/${entry.id}`)"
          >
            <!-- Entry Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {{ entry.title }}
                </h3>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="lucide:calendar" class="w-4 h-4" />
                  {{ entry.date }}
                </div>
              </div>
              <div :class="getMoodColor(entry.mood)" class="px-2 py-1 rounded-lg text-xs font-medium capitalize">
                {{ entry.mood }}
              </div>
            </div>

            <!-- Entry Excerpt -->
            <p class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {{ entry.excerpt }}
            </p>

            <!-- Entry Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-border/50">
              <div class="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="lucide:type" class="w-3 h-3" />
                {{ entry.wordCount }} words
              </div>
              <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="lucide:arrow-right" class="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          <!-- Add New Entry Card -->
          <div
            class="group bg-card/50 backdrop-blur-md border-2 border-dashed border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center min-h-[280px]"
            @click="createNewEntry"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Icon name="lucide:plus" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Create New Entry</h3>
            <p class="text-sm text-muted-foreground">Start writing your thoughts and reflections</p>
          </div>
        </div>

        <!-- Empty State (if no entries) -->
        <div v-if="diaryEntries.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-muted/50 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Icon name="lucide:book-open" class="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-4">No diary entries yet</h3>
          <p class="text-muted-foreground mb-8 max-w-md mx-auto">
            Start your journaling journey by creating your first entry. Capture your thoughts, ideas, and reflections.
          </p>
          <Button @click="createNewEntry" class="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Icon name="lucide:plus" class="w-4 h-4 mr-2" />
            Create Your First Entry
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
