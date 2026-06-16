import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("your_database_name");
    
    const data = await db.collection("your_collection").find({}).toArray();
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}