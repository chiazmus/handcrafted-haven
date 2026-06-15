'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProperties {
    placeholder? : string;
}

export default function SearchBar({ placeholder = "Search for products..." }: SearchBarProperties) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border-4 border-darkcontrast px-4 py-3 text-darkcontrast placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-primary"
        />
        <button
          type="submit"
          className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow"
        >
          Search
        </button>
      </div>
    </form>
  );
}