import NavBar from "@/app/ui/navBar";
import Card from "@/app/ui/card";


export default function Artisans(){
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4">
        <h2 className="text-3xl font-bold m-2">Artisans</h2>
        {/* Marketplace Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="John Cena"
            body="Wrestling and Acting Memorabilia"
          />
          <Card
            title="David Bowie"
            body="Songs and Face Paint"
          />
          <Card
            title="Ludvig Ban Beethoven"
            body="Compositions, Instruments, and Deafness"
          />
        </div>
      </main>
    </div>
  );
}
