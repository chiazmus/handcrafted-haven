import NavBar from "@/app/ui/navBar";
import Card from "@/app/ui/card";
import Image from 'next/image';
import SearchBar from "@/app/ui/searchBar";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="flex-column m-4">
        {/* Hero Bar */}
        <div className="border-4 border-darkcontrast mb-4 overflow-hidden">
          <Image 
          src={"/images/handcrafted-hero.webp"} 
          alt={"hero"} width={400} 
          height={300} 
          className="w-full h-auto" 
          loading="eager"
          />
        </div>
        {/* Search Bar */}
        <SearchBar />
        {/* Marketplace Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Beautiful Handmade Jewelry"
            body="Discover unique pieces created by local artisans"
          />
          <Card
            title="Handcrafted Ceramics"
            body="Unique pottery and ceramic creations"
          />
          <Card
            title="Artisan Textiles"
            body="Beautiful handwoven fabrics and tapestries"
          />
        </div>
      </main>
    </div>
  );
}
