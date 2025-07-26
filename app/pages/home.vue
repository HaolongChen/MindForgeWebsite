<script lang="ts" setup>
definePageMeta({
  middleware: ['user'],
  layout: 'user',
  title: 'Dashboard - MindForge',
})

useHead({
  title: 'Dashboard - MindForge',
  meta: [
    { name: 'description', content: 'Your personal MindForge dashboard - organize your thoughts and ideas.' }
  ]
})

// Sample data - replace with real data from your backend
const recentEntries = ref([
  { id: 1, title: "Morning Reflections", type: "journal", date: "2025-07-26", excerpt: "Started the day with clarity about my goals..." },
  { id: 2, title: "Project Ideas", type: "chat", date: "2025-07-25", excerpt: "Discussed innovative approaches to problem solving..." },
  { id: 3, title: "Creative Writing", type: "journal", date: "2025-07-24", excerpt: "Explored new narrative techniques and storytelling..." },
])

const stats = ref({
  totalEntries: 127,
  thisWeek: 12,
  totalWords: 45000,
  streak: 7
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
    <!-- Welcome Section -->
    <div class="px-6 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-foreground mb-2">
            Welcome back! 👋
          </h1>
          <p class="text-xl text-muted-foreground">
            Ready to continue your journey of thoughts and ideas?
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="lucide:file-text" class="w-6 h-6 text-blue-500" />
              </div>
              <span class="text-2xl font-bold text-foreground">{{ stats.totalEntries }}</span>
            </div>
            <h3 class="font-semibold text-foreground mb-1">Total Entries</h3>
            <p class="text-sm text-muted-foreground">All your thoughts captured</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="lucide:calendar-days" class="w-6 h-6 text-green-500" />
              </div>
              <span class="text-2xl font-bold text-foreground">{{ stats.thisWeek }}</span>
            </div>
            <h3 class="font-semibold text-foreground mb-1">This Week</h3>
            <p class="text-sm text-muted-foreground">Recent activity</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="lucide:type" class="w-6 h-6 text-purple-500" />
              </div>
              <span class="text-2xl font-bold text-foreground">{{ stats.totalWords.toLocaleString() }}</span>
            </div>
            <h3 class="font-semibold text-foreground mb-1">Words Written</h3>
            <p class="text-sm text-muted-foreground">Total word count</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="lucide:flame" class="w-6 h-6 text-orange-500" />
              </div>
              <span class="text-2xl font-bold text-foreground">{{ stats.streak }}</span>
            </div>
            <h3 class="font-semibold text-foreground mb-1">Day Streak</h3>
            <p class="text-sm text-muted-foreground">Keep it going!</p>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- New Entry Cards -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-semibold text-foreground mb-6">Quick Start</h2>
            <div class="space-y-4">
              <NuxtLink to="/diaries">
                <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name="lucide:pen-tool" class="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors">New Journal Entry</h3>
                      <p class="text-sm text-muted-foreground">Start writing your thoughts</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/chats">
                <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group cursor-pointer">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name="lucide:message-square" class="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground group-hover:text-accent transition-colors">AI Conversation</h3>
                      <p class="text-sm text-muted-foreground">Chat with your AI assistant</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Recent Entries -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-semibold text-foreground mb-6">Recent Activity</h2>
            <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6">
              <div class="space-y-4">
                <div v-for="entry in recentEntries" :key="entry.id" class="group">
                  <div class="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                         :class="entry.type === 'journal' ? 'bg-blue-500/10' : 'bg-green-500/10'">
                      <Icon :name="entry.type === 'journal' ? 'lucide:file-text' : 'lucide:message-square'" 
                            class="w-5 h-5" 
                            :class="entry.type === 'journal' ? 'text-blue-500' : 'text-green-500'" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between mb-1">
                        <h3 class="font-medium text-foreground group-hover:text-primary transition-colors">
                          {{ entry.title }}
                        </h3>
                        <span class="text-sm text-muted-foreground">{{ entry.date }}</span>
                      </div>
                      <p class="text-sm text-muted-foreground line-clamp-2">{{ entry.excerpt }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-border/50">
                <Button variant="outline" class="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="lucide:arrow-right" class="w-4 h-4 mr-2" />
                  View All Entries
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Inspirational Quote -->
        <div class="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          <div class="relative z-10">
            <Icon name="lucide:quote" class="w-12 h-12 text-primary/50 mx-auto mb-4" />
            <blockquote class="text-xl font-medium text-foreground mb-4">
              "The act of writing is the act of discovering what you believe."
            </blockquote>
            <cite class="text-muted-foreground">— David Hare</cite>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
