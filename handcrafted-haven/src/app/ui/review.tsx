'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'

interface AddReviewProps {
  productId?: string;
}

export default function AddReview({ productId }: AddReviewProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productId) return;

    const ratingNum = Number(rating);

    const reviewResponse = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: ratingNum, title, body, productId }),
    });

    if (!reviewResponse.ok) {
      console.error("Failed to save review");
      return;
    }

    const updateResponse = await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });

    if (!updateResponse.ok) {
      console.error("Failed to update product rating");
      return;
    }

    router.replace("/shop")
  };

  return (
    <div className="flex-column">
        <h2 className="text-3xl font-bold m-2">Add Review</h2>
        <form onSubmit={handleSubmit} className="max-w-xl">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <textarea placeholder="Description" value={body} onChange={(e) => setBody(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4 h-32"></textarea>
          <input   type="number" min="0" max="5" step="1" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full border-4 border-darkcontrast p-3 mb-4" />
          <button type="submit" className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">Save</button>
        </form>
    </div>
  );
}