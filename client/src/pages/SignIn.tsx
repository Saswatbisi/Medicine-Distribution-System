import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Activity, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    // Simulate auth delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);

    toast({
      title: "Welcome back! 👋",
      description: "You have signed in successfully.",
    });
    navigate("/");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Left – decorative panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-primary p-12 text-white">
        <div className="flex items-center gap-2 text-white">
          <Activity className="h-7 w-7" />
          <span className="font-bold text-2xl tracking-tight">Medic</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Share health,<br />
            <span className="text-white/70">save lives.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-sm">
            Join thousands of donors and NGOs working together to redistribute
            unused medicines to those who need them most.
          </p>
        </div>

        <div className="flex gap-8 text-white/60 text-sm">
          <div>
            <div className="text-3xl font-bold text-white">12k+</div>
            <div>Medicines shared</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">340+</div>
            <div>NGOs partnered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50k+</div>
            <div>Lives impacted</div>
          </div>
        </div>
      </div>

      {/* Right – sign in form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 text-primary mb-6">
            <Activity className="h-6 w-6" />
            <span className="font-bold text-xl">Medic</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
            <p className="text-muted-foreground">
              Welcome back — enter your details to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(v) => setRemember(!!v)}
              />
              <Label htmlFor="remember" className="font-normal cursor-pointer">
                Remember me for 30 days
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/">
              <span className="text-primary font-medium hover:underline cursor-pointer">
                Get started free
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
