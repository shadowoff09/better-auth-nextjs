import Link from "next/link"
import { SignInForm } from "@/components/SignInForm"

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground mt-2">Enter your credentials to access your account</p>
        </div>
        <SignInForm />
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-primary underline underline-offset-4 hover:text-primary/90">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

