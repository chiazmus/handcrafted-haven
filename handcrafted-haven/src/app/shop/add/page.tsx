'use client';

import { useState } from "react";
import NavBar from "@/app/ui/navBar";

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Save to database later
    console.log({ title, body, price, image });
  };

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4">
        <h2 className="text-3xl font-bold m-2">Add Product</h2>
        <form onSubmit={handleSubmit} className="max-w-xl">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <textarea placeholder="Description" value={body} onChange={(e) => setBody(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4 h-32"></textarea>
          <input   type="number" min="0.00" max="10000.00" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <button type="submit" className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">Save</button>
        </form>
      </main>
    </div>
  );
}