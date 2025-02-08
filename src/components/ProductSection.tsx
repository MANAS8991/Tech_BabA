import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Debug Mode T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "men"
  },
  {
    id: 2,
    name: "Code Review Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    category: "men"
  },
  {
    id: 3,
    name: "Git Commit Shorts",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    category: "men"
  },
  {
    id: 4,
    name: "Hello World Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    category: "women"
  },
  {
    id: 5,
    name: "Algorithm Queen Blouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800",
    category: "women"
  },
  {
    id: 6,
    name: "Code & Coffee Jacket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?auto=format&fit=crop&q=80&w=800",
    category: "women"
  },
  {
    id: 7,
    name: "Future Coder Onesie",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800",
    category: "kids"
  },
  {
    id: 8,
    name: "Binary Baby Tee",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=800",
    category: "kids"
  },
  {
    id: 9,
    name: "Little Dev Hoodie",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=800",
    category: "kids"
  }
];

interface ProductSectionProps {
  activeSection: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ activeSection }) => {
  const filteredProducts = products.filter(
    product => product.category === activeSection
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {activeSection.toUpperCase()} Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;