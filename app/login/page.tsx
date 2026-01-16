"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { useGetSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const { data: session, isPending: isSessionPending } = useGetSession();
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("dreamweave_session");
    if (session) {
      router.push("/dream");
    }
  }, [router]);

  const session = { isLoggedIn: true, userId: email };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      // Mock login: save session to localStorage
      if (password.length < 3) {
        setError("Password must be at least 3 characters");
        return;
      }

      localStorage.setItem("dreamweave_session", JSON.stringify(session));
      router.push("/dream");
    } catch (err) {
      console.error(err);
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-background to-background-end">
      <div className="w-full max-w-md p-8">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary">
              DreamWeave
            </h1>
            <p className="text-muted-foreground text-lg">
              Sign in to visualize your dreams
            </p>
          </div>

          {!session && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                variant="hero"
                size="lg"
                type="submit"
                disabled={isLoading}
                className="w-full text-lg"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
