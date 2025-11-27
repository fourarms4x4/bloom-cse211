import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Cart = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const cartItems = [
    { id: 1, name: "Pure Love Flower Bouquet", price: 500, image: "/placeholder.svg" },
    { id: 2, name: "Bloom mix chocolate Box", price: 5500, image: "/placeholder.svg" }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="bg-card rounded-2xl overflow-hidden w-24 h-24 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.price} EGP</p>
              </div>
            </div>
          ))}

          <div className="space-y-4 pt-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-input border-0 rounded-full h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Address</label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-input border-0 rounded-full h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-input border-0 rounded-full h-12"
              />
            </div>
          </div>

          <div className="pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-foreground">Total</span>
              <span className="text-lg font-medium text-foreground">{total} EGP</span>
            </div>

            <Button className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Order
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
