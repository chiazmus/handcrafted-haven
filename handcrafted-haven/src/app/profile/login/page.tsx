'use client';

import { useActionState } from "react";
import NavBar from "@/app/ui/navBar";
import { loginUser } from "@/app/actions/auth";

export default function CreateProfilePage() {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="m-4">
        <h2 className="text-3xl font-bold m-2">Login</h2>
        
        <form action={formAction} className="max-w-xl">
          
          {state?.error && (
            <p className="text-red-500 font-bold mb-4">{state.error}</p>
          )}

          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            className="w-full border-4 border-darkcontrast p-3 mb-4" 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password"  
            className="w-full border-4 border-darkcontrast p-3 mb-4" 
          />
          
          <button 
            type="submit" 
            disabled={isPending}
            className="border-4 border-darkcontrast bg-primary text-white px-6 py-3 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </form>
      </main>
    </div>
  );
}