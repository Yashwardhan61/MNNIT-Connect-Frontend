import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GraduationCap } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'campus-hub-hero')

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-20">
        <Link to="/" className="flex items-center justify-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">MNNIT-Connect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50"></div>
          {heroImage && (
            <img
              src={heroImage.imageUrl}
              alt={heroImage.description}
              className="absolute inset-0 w-full h-full object-cover -z-10"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container relative px-4 md:px-6 h-[calc(100vh-4rem)] flex items-center justify-center">
            <div className="flex flex-col items-center space-y-6 text-center bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-accent">
                  Welcome to MNNIT-Connect
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your all-in-one platform for campus life. Manage clubs, find events, access resources, and stay organized.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">
          © 2024 MNNIT-Connect. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
