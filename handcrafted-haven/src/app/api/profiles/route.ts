import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const reviewData = await req.json();
  const client = await clientPromise;
  const db = client.db("handcrafted_db");
  const result = await db.collection("artisans").insertOne(reviewData);

  return NextResponse.json({ success: true, insertedId: result.insertedId });
}