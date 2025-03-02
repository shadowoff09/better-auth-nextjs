import Link from "next/link"
import { SignUpForm } from "@/components/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground mt-2">Create a new account to get started</p>
        </div>
        <SignUpForm />
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary underline underline-offset-4 hover:text-primary/90">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

