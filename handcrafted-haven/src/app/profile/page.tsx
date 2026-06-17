import NavBar from "@/app/ui/navBar";
import Link from "next/link";
import Card from "@/app/ui/card";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GetArtisanByTitle } from "@/app/model/model";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const userName = cookieStore.get("user_session")?.value;
  if (!userName) redirect('/profile/login');
  const result = await GetArtisanByTitle(userName);
  const user = await result.json();

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4 flex-column">
        <h2 className="text-3xl font-bold m-2">My Profile</h2>
        {/* Display seller's current info here */}
        <Card 
        title={user.title}
        body={user.body}
        image={user.img}/>

        <Link href="/profile/edit" className="mt-2 block">
          <button className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">
            Edit Profile
          </button>
        </Link>

      </main>
    </div>
  );
}