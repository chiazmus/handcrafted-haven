import NavBar from "@/app/ui/navBar";
import { GetReviews } from "@/app/model/model";
import Card from "@/app/ui/card";

interface Review {
  title: string;
  body: string;
  rating: string;
  _id: string;
  productId: string;
}

interface PageProps {
  searchParams?: {
    id?: string;
  };
}

export default async function ProductReviews({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const productId = resolvedParams?.id;
  const result = await GetReviews(productId);
  const reviews: Review[] = await result.json();

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="m-4">
        {productId ? (
          <>
            <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4">Reviews for product {productId}</h1>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review) => (
                <Card
                key={review._id}
                title={`${review.title} | ${parseInt(review.rating, 10)}/5`}
                body={review.body}
                />
              ))
            )}
            </div>
          </>
        ) : (
          <p>No product selected.</p>
        )}
      </main>
    </div>
  );
}
