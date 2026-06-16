import AddReview from "@/app/ui/review";

interface ReviewPageProps {
  searchParams?: {
    id?: string;
  };
}

export default function ReviewPage({ searchParams }: ReviewPageProps) {
  const productId = searchParams?.id;

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold mb-4">Leave a Review</h1>

      {productId ? (
        <p className="mb-6 text-lg">Reviewing product ID: {productId}</p>
      ) : (
        <p className="mb-6 text-lg text-red-600">
          No product selected. Please return to the shop and choose a product to review.
        </p>
      )}

      <AddReview productId={productId} />
    </div>
  );
}