
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedPrompts } from "@/components/AnimatedPrompts";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Static UI Forms */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Welcome to disco
            </h1>
            <p className="text-muted-foreground">
              Create amazing web applications with AI
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Sign In
              </CardTitle>
              <CardDescription>
                Welcome back! Please sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700">
                  Sign In
                </button>
              </div>

              <div className="mt-6 text-center">
                <button className="text-sm text-muted-foreground hover:text-blue-600 transition-colors duration-300 bg-transparent border-0 cursor-pointer">
                  Don't have an account? Create one
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Animated Prompts */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 animate-gradient-xy">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-600/20 to-blue-800/20" />
        </div>
        <AnimatedPrompts />
      </div>
    </div>
  );
};

export default Index;
