<script lang="ts" setup>
definePageMeta({
  layout: 'user',
  title: 'AI Conversations - MindForge',
})

useHead({
  title: 'AI Conversations - MindForge',
  meta: [
    { name: 'description', content: 'Your AI conversation history - intelligent discussions and brainstorming sessions.' }
  ]
})

// Sample chat entries - replace with real data
const chatEntries = ref([
  {
    id: 1,
    title: "Project Planning Discussion",
    excerpt: "Discussed various approaches to organizing a complex project with multiple stakeholders...",
    date: "2025-07-26",
    messageCount: 12,
    lastActivity: "2 hours ago",
    category: "productivity"
  },
  {
    id: 2,
    title: "Creative Writing Assistance",
    excerpt: "Brainstormed character development ideas and plot structures for a science fiction story...",
    date: "2025-07-25",
    messageCount: 8,
    lastActivity: "1 day ago",
    category: "creative"
  },
  {
    id: 3,
    title: "Learning Strategy Session",
    excerpt: "Explored different techniques for effective learning and knowledge retention...",
    date: "2025-07-24",
    messageCount: 15,
    lastActivity: "2 days ago",
    category: "learning"
  },
])

const getCategoryColor = (category: string) => {
  const colors = {
    productivity: 'text-blue-500 bg-blue-500/10',
    creative: 'text-purple-500 bg-purple-500/10',
    learning: 'text-green-500 bg-green-500/10',
    problem_solving: 'text-orange-500 bg-orange-500/10',
    brainstorming: 'text-red-500 bg-red-500/10'
  }
  return colors[category as keyof typeof colors] || 'text-gray-500 bg-gray-500/10'
}

const createNewChat = () => {
  // For demo purposes, navigate to a sample chat
  navigateTo('/chats/new')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
    <div class="px-6 py-8">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-4xl font-bold text-foreground mb-2">AI Conversations</h1>
            <p class="text-lg text-muted-foreground">Your intelligent discussions and brainstorming sessions</p>
          </div>
          <Button @click="createNewChat" class="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Icon name="lucide:message-square-plus" class="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:message-square" class="w-8 h-8 text-primary" />
              <span class="text-2xl font-bold text-foreground">{{ chatEntries.length }}</span>
            </div>
            <h3 class="font-semibold text-foreground">Total Chats</h3>
            <p class="text-sm text-muted-foreground">Your conversation history</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:messages-square" class="w-8 h-8 text-green-500" />
              <span class="text-2xl font-bold text-foreground">{{ chatEntries.reduce((sum, chat) => sum + chat.messageCount, 0) }}</span>
            </div>
            <h3 class="font-semibold text-foreground">Messages</h3>
            <p class="text-sm text-muted-foreground">Total exchanges</p>
          </div>

          <div class="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-between mb-2">
              <Icon name="lucide:brain" class="w-8 h-8 text-purple-500" />
              <span class="text-2xl font-bold text-foreground">5</span>
            </div>
            <h3 class="font-semibold text-foreground">Topics Explored</h3>
            <p class="text-sm text-muted-foreground">Different conversation areas</p>
          </div>
        </div>

        <!-- Chat History -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="chat in chatEntries"
            :key="chat.id"
            class="group bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
            @click="navigateTo(`/chats/${chat.id}`)"
          >
            <!-- Chat Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {{ chat.title }}
                </h3>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="lucide:clock" class="w-4 h-4" />
                  {{ chat.lastActivity }}
                </div>
              </div>
              <div :class="getCategoryColor(chat.category)" class="px-2 py-1 rounded-lg text-xs font-medium capitalize">
                {{ chat.category }}
              </div>
            </div>

            <!-- Chat Excerpt -->
            <p class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {{ chat.excerpt }}
            </p>

            <!-- Chat Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-border/50">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="lucide:message-circle" class="w-3 h-3" />
                  {{ chat.messageCount }} messages
                </div>
                <div class="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="lucide:calendar" class="w-3 h-3" />
                  {{ chat.date }}
                </div>
              </div>
              <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="lucide:arrow-right" class="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          <!-- Add New Chat Card -->
          <div
            class="group bg-card/50 backdrop-blur-md border-2 border-dashed border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center min-h-[280px]"
            @click="createNewChat"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Icon name="lucide:message-square-plus" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Start New Chat</h3>
            <p class="text-sm text-muted-foreground">Begin a conversation with your AI assistant</p>
          </div>
        </div>

        <!-- Quick Start Topics -->
        <div class="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8">
          <h2 class="text-2xl font-bold text-foreground mb-6 text-center">Quick Start Topics</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-card/50 backdrop-blur-sm rounded-xl p-4 hover:bg-card/80 transition-colors cursor-pointer group" @click="createNewChat">
              <Icon name="lucide:lightbulb" class="w-8 h-8 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 class="font-semibold text-foreground mb-1">Brainstorming</h3>
              <p class="text-sm text-muted-foreground">Generate creative ideas</p>
            </div>
            <div class="bg-card/50 backdrop-blur-sm rounded-xl p-4 hover:bg-card/80 transition-colors cursor-pointer group" @click="createNewChat">
              <Icon name="lucide:book-open" class="w-8 h-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 class="font-semibold text-foreground mb-1">Learning</h3>
              <p class="text-sm text-muted-foreground">Explore new topics</p>
            </div>
            <div class="bg-card/50 backdrop-blur-sm rounded-xl p-4 hover:bg-card/80 transition-colors cursor-pointer group" @click="createNewChat">
              <Icon name="lucide:puzzle" class="w-8 h-8 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 class="font-semibold text-foreground mb-1">Problem Solving</h3>
              <p class="text-sm text-muted-foreground">Find solutions together</p>
            </div>
            <div class="bg-card/50 backdrop-blur-sm rounded-xl p-4 hover:bg-card/80 transition-colors cursor-pointer group" @click="createNewChat">
              <Icon name="lucide:pen-tool" class="w-8 h-8 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 class="font-semibold text-foreground mb-1">Writing</h3>
              <p class="text-sm text-muted-foreground">Improve your writing</p>
            </div>
          </div>
        </div>

        <!-- Empty State (if no chats) -->
        <div v-if="chatEntries.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-muted/50 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Icon name="lucide:message-square" class="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-4">No conversations yet</h3>
          <p class="text-muted-foreground mb-8 max-w-md mx-auto">
            Start your first AI conversation. Get help with problems, brainstorm ideas, or explore new topics.
          </p>
          <Button @click="createNewChat" class="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <Icon name="lucide:message-square-plus" class="w-4 h-4 mr-2" />
            Start Your First Chat
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
