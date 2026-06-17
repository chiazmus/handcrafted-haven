import { cookies } from "next/headers";
import AddForm from "@/app/shop/add/AddForm";
import { redirect } from "next/navigation";
import { GetArtisanByTitle } from "@/app/model/model";

export default async function AddProduct() {
  const cookieStore = await cookies();
  const userName = cookieStore.get("user_session")?.value;
  if (!userName) redirect('/profile/login');
  const result = await GetArtisanByTitle(userName);
  const user = await result.json();

  const userId = user._id.toString();

  return (
    <AddForm userId={userId}/>
  );
}