import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account or create a new one</p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

