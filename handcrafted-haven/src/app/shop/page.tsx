import NavBar from "@/app/ui/navBar";
import SearchBar from "@/app/ui/searchBar";
import Products from "@/app/shop/products";
import { GetProducts } from "@/app/model/model";
import Link from 'next/link';

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
      <main className="m-4 flex flex-col gap-2">
        <SearchBar />
        {(query) && (<h2>Search Results for: &quot;{query}&quot;</h2>)}
        <Products productList={products} searchFilter={query}/>
        <Link href='shop/add' className="block border-4 w-fit border-darkcontrast bg-primary text-white px-2 py-2 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">Add Your Own Product!</Link>
      </main>
    </div>
  );
}
