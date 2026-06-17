import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { GetArtisanByTitle } from "@/app/model/model";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const userName = cookieStore.get("user_session")?.value;
  if (userName) return NextResponse.json({success: false}, { status: 401 });

  const profileData = await req.json();
  const client = await clientPromise;
  const db = client.db("handcrafted_db");
  const result = await db.collection("artisans").insertOne(profileData);

  return NextResponse.json({ success: true, insertedId: result.insertedId });
}

export async function PUT(req: Request) {
  const cookieStore = await cookies();
  const userName = cookieStore.get("user_session")?.value;
  if (!userName) return NextResponse.json({success: false}, { status: 401 });
  
  const artisanresult = await GetArtisanByTitle(userName);
  
  if (!artisanresult.ok) {
    return NextResponse.json({success: false}, { status: artisanresult.status });
  }
  
  const user = await artisanresult.json();
  
  if (!user._id) {
    return NextResponse.json({success: false, error: "User not found"}, { status: 404 });
  }

  try {
    const profileData = await req.json();
    const client = await clientPromise;
    const db = client.db("handcrafted_db");
    const result = await db.collection("artisans").replaceOne({ _id: new ObjectId(user._id) }, profileData);

    return NextResponse.json({ success: true, insertedId: result.upsertedId});
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({success: false, error: "Failed to update profile"}, { status: 500 });
  }
}