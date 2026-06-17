import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const reviewData = await req.json();
  const client = await clientPromise;
  const db = client.db("handcrafted_db");
  const result = await db.collection("products").insertOne(reviewData);

  return NextResponse.json({ success: true, insertedId: result.insertedId });
}

export async function PUT(req: Request) {
  const { productId } = await req.json();

  if (!productId) {
    return NextResponse.json(
      { error: "Missing productId" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("handcrafted_db");

  const agg = await db
    .collection("reviews")
    .aggregate([
      { $match: { productId } },
      { $group: { _id: "$productId", avgRating: { $avg: { $toDouble: "$rating" } } } },
    ])
    .toArray();

  const avgRating = agg[0]?.avgRating ?? 0;

  await db.collection("products").updateOne(
    { _id: new ObjectId(productId) },
    { $set: { rating: avgRating } }
  );

  return NextResponse.json({ success: true, avgRating });
}