'use client';

import { useState } from "react";
import NavBar from "@/app/ui/navBar";
import { useRouter } from 'next/navigation';
import { hashPassword } from "@/app/auth";

export default function EditProfilePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewResponse = await fetch("/api/profiles", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, image: image, password: hashPassword(password) }),
    });

    if (!reviewResponse.ok) {
      console.error("Failed to save profile");
      return;
    }

    router.replace("/profile")
  };

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4">
        <h2 className="text-3xl font-bold m-2">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="max-w-xl">
          <input type="text" placeholder="Username" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <textarea placeholder="Bio" value={body} onChange={(e) => setBody(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4 h-32"></textarea>
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <button type="submit" className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">Save</button>
        </form>
      </main>
    </div>
  );
}