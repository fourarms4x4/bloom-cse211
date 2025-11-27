import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, validate credentials
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wider text-foreground">
            BLOOM
          </h1>
          <p className="text-sm text-muted-foreground tracking-widest">FLOWER BOUTIQUE</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-primary flex-shrink-0" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground"
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button 
              type="submit"
              className="w-64 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium"
            >
              Log in
            </Button>
            <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
