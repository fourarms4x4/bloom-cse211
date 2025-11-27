import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const products = {
    flowers: Array(6).fill({
      name: "Pure Love Flower Bouquet",
      price: "500 EGP",
      image: "/placeholder.svg"
    }),
    chocolates: Array(6).fill({
      name: "Bloom mix chocolate Box",
      price: "5500 EGP",
      image: "/placeholder.svg"
    }),
    plants: Array(6).fill({
      name: "Bougainvillea",
      price: "650 EGP",
      image: "/placeholder.svg"
    })
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed max-w-3xl mx-auto">
            Because every moment deserves flowers, sweetness, and a touch of green.
          </h2>
        </section>

        <section id="flowers" className="mb-16">
          <h3 className="text-3xl font-serif text-center text-foreground mb-8">Flowers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.flowers.map((product, index) => (
              <ProductCard
                key={`flower-${index}`}
                id={`flower-${index}`}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section id="chocolates" className="mb-16">
          <h3 className="text-3xl font-serif text-center text-foreground mb-8">Chocolates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.chocolates.map((product, index) => (
              <ProductCard
                key={`chocolate-${index}`}
                id={`chocolate-${index}`}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section id="plants" className="mb-16">
          <h3 className="text-3xl font-serif text-center text-foreground mb-8">Plants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.plants.map((product, index) => (
              <ProductCard
                key={`plant-${index}`}
                id={`plant-${index}`}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h3 className="text-3xl font-serif text-center text-foreground mb-8">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary rounded-[3rem] p-8 text-primary-foreground">
              <p className="text-sm leading-relaxed">
                First you have to sign up within your account then do your shopping, choose your adorable gift. Each time you make an order you save your information and congratulation you are now part of BLOOM!
              </p>
            </div>
            <div className="bg-primary rounded-[3rem] p-8"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
