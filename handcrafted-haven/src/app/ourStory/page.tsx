import NavBar from "@/app/ui/navBar";
import Card from "@/app/ui/card";
import Image from 'next/image';


export default function OurStory(){
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4 flex-column">
        <h2 className="text-3xl font-bold m-2">About Us</h2>
        {/* Hero Bar */}
        <div className="border-4 border-darkcontrast mb-4 overflow-hidden">
          <Image 
          src={"/images/about-us-hero.webp"} 
          alt={"hero"} width={400} 
          height={300} 
          className="w-full h-auto" 
          loading="eager"
          />
        </div>
        <Card
        title="Our Story"
        body="Here at Handcrafted Haven, we pride ourselves on our quality products and the exceptional service that we provide.
        It all started years ago when our founder, David D. McDiggledoo realized he couldn't find the quality handcrafted goods he wanted online.
        So he began his own company, building a space for creators to thrive and selling their products directly to consumers.
        Today we honor his legacy by bringing handcrafted products and artisans to the spotlight!"
        />
      </main>
    </div>
  );
}
