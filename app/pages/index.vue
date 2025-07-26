<script lang="ts" setup>
const isDark = computed(() => useColorMode().value === 'dark')

const { isLoaded, isSignedIn } = useAuth()

if (isLoaded.value && isSignedIn.value) {
  await navigateTo('/home')
}

useHead({
  title: 'MindForge - Where Ideas Take Shape',
  meta: [
    { name: 'description', content: 'Transform your thoughts into organized knowledge with AI-powered journals and intelligent conversations.' }
  ]
})

// Add some interactivity
const heroRef = ref()
const featuresRef = ref()

// Mouse tracking for hero section
const mousePosition = reactive({ x: 0, y: 0 })

const updateMousePosition = (e: MouseEvent) => {
  const rect = heroRef.value?.getBoundingClientRect()
  if (rect) {
    mousePosition.x = ((e.clientX - rect.left) / rect.width) * 100
    mousePosition.y = ((e.clientY - rect.top) / rect.height) * 100
  }
}

onMounted(() => {
  // Add mouse tracking to hero section
  if (heroRef.value) {
    heroRef.value.addEventListener('mousemove', updateMousePosition)
  }
})

onUnmounted(() => {
  if (heroRef.value) {
    heroRef.value.removeEventListener('mousemove', updateMousePosition)
  }
})
</script>

<template>
<<<<<<< HEAD
  <ParticlesBg
    class="inset-0 absolute sm:h-[calc(70vh_+_57px)] h-screen pointer-events-none"
    :quantity="100"
    :ease="100"
    :color="isDark ? '#FFF' : '#000'"
    :staticity="10"
    refresh
  />
  <div class="w-full sm:h-[70vh] h-[90vh] flex sm:px-10 px-1">
    <div class="justify-center items-start px-8 flex flex-col">
      <ClientOnly>
        <BlurReveal
          :delay="0.2"
          :duration="0.75"
          class="flex flex-col gap-4 sm:items-start items-center"
        >
          <div class="text-5xl sm:text-6xl font-bold font-serif" as-child>
            <span style="color: rgb(131, 179, 32)">M</span>
            <span style="color: rgb(47, 195, 106)">i</span>
            <span style="color: rgb(42, 169, 210)">n</span>
            <span style="color: rgb(4, 112, 202)">d</span>
            <span style="color: rgb(107, 10, 255)">F</span>
            <span style="color: rgb(183, 0, 218)">o</span>
            <span style="color: rgb(218, 0, 171)">r</span>
            <span style="color: rgb(230, 64, 92)">g</span>
            <span style="color: rgb(232, 98, 63)">e</span>
          </div>
          <div class="flex flex-col">
            <span class="text-3xl">Your Digital Twin.</span>
            <span class="text-3xl">Make AdventureX Great Again.</span>
          </div>
          <div class="flex gap-2">
            <SignInButton as-child>
              <Button class="cursor-pointer mt-1">
                Getting Started
              </Button>
            </SignInButton>
            <Button class="mt-1" variant="secondary" as-child>
              <NuxtLink href="/">
                Why us
              </NuxtLink>
            </Button>
          </div>
        </BlurReveal>
      </ClientOnly>
    </div>
    <div class="justify-center items-center flex-row flex-1 sm:flex hidden">
      <img src="/website.png" class="max-h-[405px]">
      <img src="/mobile.jpg" class="hidden xl:inline max-h-[405px]">
    </div>
  </div>
  <div class="sm:px-20 px-5 flex flex-col gap-10">
    <div class="flex sm:h-[calc(100vh_-_70vh_-_57px_-_20px)] h-[50vh] sm:flex-row flex-col gap-5">
      <Card class="flex-1 flex flex-col items-center justify-center">
        <CardContent class="px-10 !pb-0">
          <div class="text-xl font-bold">
            What is MindForge? 🤔
          </div>
          <div class="text-sm text-zinc-500">
            Your evolving digital twin. Beyond data, it gets your emotions, keeps your thoughts, and grows with you. More than a journal—it's your reflective journey.
          </div>
        </CardContent>
      </Card>
      <Card class="flex-1 flex flex-col items-center justify-center">
        <CardContent class="px-10 !pb-0">
          <div class="text-xl font-bold">
            How Does It Grow With You? 🌱
          </div>
          <div class="text-sm text-zinc-500">
            Multi-agent AI listens & learns. MindForge becomes your emotional mirror: noticing patterns, supporting struggles, reflecting your path
          </div>
        </CardContent>
      </Card>
    </div>
=======
  <div class="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
    <!-- Hero Section -->
    <section 
      ref="heroRef"
      class="relative px-6 py-20 sm:py-32 overflow-hidden min-h-screen flex items-center"
    >
      <!-- Enhanced Background decorative elements -->
      <div class="absolute inset-0 -z-10">
        <!-- Main gradient orbs -->
        <div 
          class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"
          :style="`transform: translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`"
        ></div>
        <div 
          class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s"
          :style="`transform: translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`"
        ></div>
        
        <!-- Additional floating elements -->
        <div class="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style="animation-delay: 2s"></div>
        
        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <div class="mx-auto max-w-5xl text-center relative z-10">
        <!-- Logo/Brand with enhanced animation -->
        <div class="mb-12 flex justify-center">
          <div class="flex items-center space-x-4 group">
            <div class="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-primary/40">
              <Icon name="lucide:brain-circuit" class="w-8 h-8 text-primary-foreground animate-pulse" />
            </div>
            <h1 class="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% transition-all duration-500 group-hover:scale-105">
              MindForge
            </h1>
          </div>
        </div>

        <!-- Main headline with typewriter effect -->
        <h2 class="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-tight">
          Where Ideas
          <span class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% block mt-2">
            Take Shape
          </span>
        </h2>
        
        <!-- Enhanced subheadline -->
        <p class="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Transform your thoughts into organized knowledge with 
          <span class="text-primary font-medium">AI-powered journals</span> and 
          <span class="text-accent font-medium">intelligent conversations</span>. 
          Your personal space for reflection, creativity, and growth.
        </p>

        <!-- Enhanced CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <SignedOut>
            <SignInButton as-child>
              <Button size="lg" class="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl shadow-primary/25 hover:shadow-primary/40 relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Icon name="lucide:sparkles" class="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" class="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl shadow-primary/25 hover:shadow-primary/40 relative overflow-hidden group" @click="navigateTo('/home')">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon name="lucide:arrow-right" class="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              Go to Dashboard
              <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Button>
          </SignedIn>
          <Button variant="outline" size="lg" class="px-10 py-4 text-lg font-semibold border-2 hover:bg-accent/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group">
            <Icon name="lucide:play-circle" class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>

        <!-- Enhanced Feature preview cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div class="group bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon name="lucide:pen-tool" class="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">Smart Journaling</h3>
            <p class="text-muted-foreground leading-relaxed">AI-enhanced writing experience that helps organize your thoughts and insights automatically with intelligent suggestions.</p>
          </div>
          
          <div class="group bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-green-500/30 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon name="lucide:message-square" class="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-green-500 transition-colors duration-300">Intelligent Chats</h3>
            <p class="text-muted-foreground leading-relaxed">Engage in meaningful conversations with AI that understands context and helps you explore ideas deeply.</p>
          </div>
          
          <div class="group bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-purple-500/30 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon name="lucide:brain" class="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-purple-500 transition-colors duration-300">Knowledge Graph</h3>
            <p class="text-muted-foreground leading-relaxed">Discover connections between your ideas and build a comprehensive knowledge network that grows with you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section ref="featuresRef" class="px-6 py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div class="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div class="mx-auto max-w-7xl relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Everything you need to
            <span class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% block">think better</span>
          </h2>
          <p class="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed to enhance your cognitive workflow and unlock your creative potential.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Enhanced Feature List -->
          <div class="space-y-10">
            <div class="group flex items-start space-x-6">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon name="lucide:edit-3" class="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div class="flex-1">
                <h3 class="text-3xl font-semibold text-foreground mb-3 group-hover:text-blue-500 transition-colors duration-300">Effortless Writing</h3>
                <p class="text-lg text-muted-foreground leading-relaxed">Write naturally while AI helps structure your thoughts and provides intelligent suggestions to enhance your creativity.</p>
              </div>
            </div>
            
            <div class="group flex items-start space-x-6">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon name="lucide:search" class="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div class="flex-1">
                <h3 class="text-3xl font-semibold text-foreground mb-3 group-hover:text-green-500 transition-colors duration-300">Smart Search</h3>
                <p class="text-lg text-muted-foreground leading-relaxed">Find any thought or conversation instantly with semantic search that understands context and meaning.</p>
              </div>
            </div>

            <div class="group flex items-start space-x-6">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon name="lucide:zap" class="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div class="flex-1">
                <h3 class="text-3xl font-semibold text-foreground mb-3 group-hover:text-purple-500 transition-colors duration-300">AI Insights</h3>
                <p class="text-lg text-muted-foreground leading-relaxed">Get intelligent suggestions and discover hidden patterns in your thoughts with advanced AI analysis.</p>
              </div>
            </div>
          </div>

          <!-- Enhanced Feature preview mockup -->
          <div class="relative">
            <div class="bg-card border border-border/50 rounded-3xl p-10 shadow-2xl shadow-primary/10 backdrop-blur-md relative overflow-hidden group">
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <!-- Browser mockup header -->
              <div class="flex items-center space-x-3 mb-8">
                <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div class="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                <div class="flex-1 h-8 bg-muted/50 rounded-lg ml-4"></div>
              </div>
              
              <!-- Content mockup -->
              <div class="space-y-6 relative z-10">
                <div class="h-6 bg-muted/70 rounded-lg w-3/4 animate-pulse"></div>
                <div class="h-6 bg-muted/70 rounded-lg w-full animate-pulse" style="animation-delay: 0.1s"></div>
                <div class="h-6 bg-muted/70 rounded-lg w-5/6 animate-pulse" style="animation-delay: 0.2s"></div>
                
                <!-- AI suggestion box -->
                <div class="h-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl flex items-center justify-center relative overflow-hidden group/inner">
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-1000"></div>
                  <Icon name="lucide:sparkles" class="w-12 h-12 text-primary/70 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <div class="absolute top-2 right-2">
                    <div class="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div class="h-6 bg-muted/70 rounded-lg w-2/3 animate-pulse" style="animation-delay: 0.3s"></div>
                <div class="h-6 bg-muted/70 rounded-lg w-4/5 animate-pulse" style="animation-delay: 0.4s"></div>
              </div>
              
              <!-- Floating particles -->
              <div class="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-float"></div>
              <div class="absolute bottom-8 left-6 w-3 h-3 bg-accent/50 rounded-full animate-float" style="animation-delay: 1s"></div>
              <div class="absolute top-1/2 right-8 w-1 h-1 bg-primary/30 rounded-full animate-float" style="animation-delay: 2s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Call to Action -->
    <section class="px-6 py-24 relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5"></div>
      <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      
      <div class="mx-auto max-w-5xl text-center relative z-10">
        <div class="mb-12">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Ready to 
            <span class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              forge your mind?
            </span>
          </h2>
          <p class="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Join thousands of thinkers, creators, and innovators who trust MindForge with their ideas.
          </p>
          <p class="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Start your journey today and unlock the full potential of your creative mind.
          </p>
        </div>
        
        <!-- Enhanced CTA with stats -->
        <div class="flex flex-col items-center gap-8">
          <SignedOut>
            <SignInButton as-child>
              <Button size="lg" class="px-16 py-6 text-xl font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-primary/30 hover:shadow-primary/50 relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span class="relative z-10 flex items-center">
                  Get Started Free
                  <Icon name="lucide:arrow-right" class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" class="px-16 py-6 text-xl font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-primary/30 hover:shadow-primary/50 relative overflow-hidden group" @click="navigateTo('/home')">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span class="relative z-10 flex items-center">
                Continue to Dashboard
                <Icon name="lucide:arrow-right" class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Button>
          </SignedIn>
          
          <!-- Social proof / stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div class="text-center group">
              <div class="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
              <div class="text-muted-foreground">Ideas Captured</div>
            </div>
            <div class="text-center group">
              <div class="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div class="text-muted-foreground">Creative Minds</div>
            </div>
            <div class="text-center group">
              <div class="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div class="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> afb7cdc (Add custom favicon with brain circuit design in SVG format)
  </div>
</template>

<style scoped>
/* Enhanced custom animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(5deg); 
  }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(var(--primary), 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(var(--primary), 0.6);
  }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  animation: gradient 8s ease infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.bg-300\% {
  background-size: 300% 300%;
}

/* Grid pattern background */
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(var(--foreground), 0.15) 1px, transparent 0);
  background-size: 20px 20px;
}

/* Enhanced hover effects */
.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group:hover .group-hover\:translate-x-2 {
  transform: translateX(8px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--primary), 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--primary), 0.5);
}

/* Parallax effect containers */
.parallax-container {
  transform-style: preserve-3d;
}

.parallax-element {
  transform: translateZ(0);
  will-change: transform;
}
</style>
