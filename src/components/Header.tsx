import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Link to="/account" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <User className="w-5 h-5" />
            <span className="text-sm">Account</span>
          </Link>
          
          <Link to="/home" className="text-center">
            <h1 className="text-4xl font-serif font-bold tracking-wider text-foreground">BLOOM</h1>
          </Link>
          
          <Link to="/cart" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">Cart</span>
          </Link>
        </div>
        
        <nav className="bg-primary rounded-full px-8 py-3">
          <ul className="flex items-center justify-center gap-6 text-primary-foreground text-sm">
            <li><Link to="/home" className="hover:opacity-80 transition-opacity">Search</Link></li>
            <li><Link to="/home#flowers" className="hover:opacity-80 transition-opacity">Flowers</Link></li>
            <li><Link to="/home#chocolates" className="hover:opacity-80 transition-opacity">Chocolates</Link></li>
            <li><Link to="/home#plants" className="hover:opacity-80 transition-opacity">Plants</Link></li>
            <li><Link to="/home" className="hover:opacity-80 transition-opacity">Ask</Link></li>
            <li><Link to="/home#how-it-works" className="hover:opacity-80 transition-opacity">How it works</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
