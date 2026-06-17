import Card from "@/app/ui/card";

interface Product {
  _id: string;
  title: string;
  body: string;
  image?: string;
  price: number;
  rating: number;
  artisanId: string;
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
        product.body.toLowerCase().includes(searchFilter.toLowerCase()) || product.artisanId.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : productList;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <Card
          key={product._id.toString()}
          title={`${product.title} | $${product.price} | ${parseInt(String(product.rating), 10)}/5`}
          body={product.body}
          image={product.image}
          review={product._id.toString()}
        />
      ))}
      {(productList.length == 0) && (<h3 className="text-center text-2xl">No products are available!</h3>)}
    </div>
  );
}