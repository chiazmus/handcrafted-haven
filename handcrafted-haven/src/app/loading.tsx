function CardSkeleton() {
  return (
    <div className="bg-gray-300 border-4 border-darkcontrast p-6 animate-pulse">
      <div className="h-40 bg-gray-400 mb-4"></div>
      <div className="h-6 bg-gray-400 mb-3 w-3/4"></div>
      <div className="h-4 bg-gray-400 w-full"></div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}