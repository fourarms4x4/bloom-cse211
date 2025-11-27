import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-sm font-medium text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
