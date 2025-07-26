<script lang="ts" setup></script>

<template>
<<<<<<< HEAD
  <div class="w-full h-14 flex items-center justify-between px-5">
    <div class="flex items-center gap-2">
      <img src="/logo.png" class="w-9 h-9">
      <h3 class="text-2xl font-bold font-serif">
=======
  <div class="w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
        <Icon name="lucide:brain-circuit" class="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 class="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
>>>>>>> afb7cdc (Add custom favicon with brain circuit design in SVG format)
        MindForge
      </h3>
    </div>
    <div>
      <!-- Navigation Group -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/features" class="hover:text-primary transition-colors">
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing" class="hover:text-primary transition-colors">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" class="hover:text-primary transition-colors">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div class="flex items-center gap-3">
      <!-- Button group -->
      <SignedOut>
        <SignInButton as-child>
          <Button variant="outline" class="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SettingsButton />
    </div>
  </div>
</template>

<style></style>
