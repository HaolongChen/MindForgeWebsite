// Temporary auth composable for development
// Replace with actual Clerk integration once environment variables are set

export const useAuth = () => {
  const isLoaded = ref(true)
  const isSignedIn = ref(false) // Set to false for demo mode
  
  return {
    isLoaded,
    isSignedIn
  }
}
