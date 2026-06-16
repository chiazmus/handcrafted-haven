import NavBar from "@/app/ui/navBar";
import Link from "next/link";
import Card from "@/app/ui/card";

export default function ProfilePage() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4 flex-column">
        <h2 className="text-3xl font-bold m-2">My Profile</h2>
        {/* Display seller's current info here */}
        <Card 
        title={"seller name"}
        body={"seller description"}/>

        <Link href="/profile/edit" className="mt-2 block">
          <button className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">
            Edit Profile
          </button>
        </Link>

      </main>
    </div>
  );
}