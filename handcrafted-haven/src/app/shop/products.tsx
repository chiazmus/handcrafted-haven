import Card from "@/app/ui/card";

interface Product {
  id: string;
  title: string;
  description: string;
  image?: string;
  price: number;
  rating: number;
  // Add other fields as needed
}

interface ProductProps {
    searchFilter? : string;
    productList : Product[];
}

export default function Products({ searchFilter, productList } : ProductProps) {
  const filteredProducts = searchFilter
    ? productList.filter(product =>
        product.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        product.description.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : productList;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <Card
          key={product.id}
          title={`${product.title} | ${product.rating}/5`}
          body={product.description}
          image={product.image}
          review={`shop/review?id=${product.id}`}
        />
      ))}
      {(productList.length == 0) && (<h3 className="text-center text-2xl">No products are available!</h3>)}
    </div>
  );
}