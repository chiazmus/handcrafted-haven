import clientPromise from "@/app/lib/mongodb";

export async function GetProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("handcrafted_db");
    
    const data = await db.collection("products").find({}).toArray();
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function GetArtisans() {
  try {
    const client = await clientPromise;
    const db = client.db("handcrafted_db");
    
    const data = await db.collection("artisans").find({}).toArray();
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed to fetch artisans" }, { status: 500 });
  }
}

export async function GetArtisanByTitle(title: string) {
  try {
    const client = await clientPromise;
    const db = client.db("handcrafted_db");
    
    const data = await db.collection("artisans").findOne({title: title});

    if (!data) return Response.json({ error: "Artisan not found" }, { status: 404 });

    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed to fetch artisans" }, { status: 500 });
  }
}

export async function GetReviews(productId?: string) {
  try {
    const client = await clientPromise;
    const db = client.db("handcrafted_db");

    const query = productId ? { productId } : {};
    const data = await db.collection("reviews").find(query).toArray();
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}