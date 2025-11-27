import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-card rounded-3xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Pure Love Flower Bouquet"
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-serif text-foreground mb-2">Pure Love Flower Bouquet</h1>
                <p className="text-xl text-foreground font-medium">500 EGP</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                White, romantic, and breathtaking bouquet is composed of an exquisite array of fragrant flowers in a dreamy mix of cream, pink, and white, including lisianthus, tulips, white pink roses and green. Timeless and everlasting, this bouquet is delicately wrapped in elegant paper which pink color, wrapped in jute craft paper, and topped with a bow to say "Wow what a beautiful thought"
              </p>

              <Button className="w-full md:w-auto px-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
