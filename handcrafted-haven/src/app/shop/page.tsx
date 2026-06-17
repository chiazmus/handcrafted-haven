import NavBar from "@/app/ui/navBar";
import SearchBar from "@/app/ui/searchBar";
import Products from "@/app/shop/products";
import { GetProducts } from "@/app/model/model";

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

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.search || '';

  const response = await GetProducts();
  const products: Product[] = await response.json();  

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="m-4">
        <SearchBar />
        {(query) && (<h2>Search Results for: &quot;{query}&quot;</h2>)}
        <Products productList={products} searchFilter={query}/>
      </main>
    </div>
  );
}
