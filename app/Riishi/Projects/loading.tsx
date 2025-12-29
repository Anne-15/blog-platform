export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="h-64 bg-gray-200 rounded-lg mb-8 dark:bg-gray-700"></div>
        
        {/* Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video bg-gray-200 rounded-lg dark:bg-gray-700"></div>
              <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
              <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
