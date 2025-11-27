import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">Welcome!!</h2>
          
          <div className="bg-card rounded-3xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-accent" />
              </div>
              
              <div className="space-y-2 text-sm text-foreground">
                <p className="font-medium">Aya Mamdouh</p>
                <p className="text-muted-foreground">Egypt</p>
                <p className="text-muted-foreground">+20 1283483904</p>
                <p className="text-muted-foreground">aya.mamdouh@icloud.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
