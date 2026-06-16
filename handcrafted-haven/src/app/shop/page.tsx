import NavBar from "@/app/ui/navBar";
import SearchBar from "@/app/ui/searchBar";
import Products from "@/app/shop/products";

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.search || '';

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="m-4">
        <SearchBar />
        {(query) && (<h2>Search Results for: &quot;{query}&quot;</h2>)}
        {/* Display filtered products here later */}
        <Products productList={[]}/>
      </main>
    </div>
  );
}
