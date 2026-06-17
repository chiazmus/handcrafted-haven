import NavBar from "@/app/ui/navBar";
import Card from "@/app/ui/card";
import { GetArtisans } from "@/app/model/model";

interface Artisan {
  _id : string;
  title : string;
  body : string;
  img? : string;
}

export default async function Artisans(){
  const response = await GetArtisans();
  const artisans: Artisan[] = await response.json();

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4">
        <h2 className="text-3xl font-bold m-2">Artisans</h2>
        {/* Marketplace Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(artisans.length === 0) &&
          (<><Card
            title="John Cena"
            body="Wrestling and Acting Memorabilia"
            artistProducts="johncena"
          />
          <Card
            title="David Bowie"
            body="Songs and Face Paint"
            artistProducts="davidbowie"
          />
          <Card
            title="Ludvig Ban Beethoven"
            body="Compositions, Instruments, and Deafness"
            artistProducts="ludvigbanbeethoven"
          /></>)}
          {artisans.map(artisan => (
            <Card
            key={artisan._id.toString()}
            title={artisan.title}
            body={artisan.body}
            image={artisan.img}
            artistProducts={artisan._id.toString()}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
