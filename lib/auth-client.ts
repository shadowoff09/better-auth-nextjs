import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL as string,
})

// Export the authClient instance
export const {
    signIn,
    signOut,
    signUp,
    useSession,
} = authClient;

// Define the type for the session
export type Session = typeof authClient.$Infer.Session