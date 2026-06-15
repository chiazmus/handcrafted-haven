import NavBar from "@/app/ui/navBar";
import SearchBar from "@/app/ui/searchBar";

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
        <h2>Search Results for: &quot;{query}&quot;</h2>
        {/* Display filtered products here later */}
      </main>
    </div>
  );
}
