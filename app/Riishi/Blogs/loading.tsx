export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="text-center space-y-2 mb-8">
          <div className="h-10 bg-gray-200 rounded dark:bg-gray-700 w-64 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-96 mx-auto"></div>
        </div>
        
        {/* Grid skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4 p-4 bg-white dark:bg-zinc-900 rounded-lg">
              <div className="aspect-video bg-gray-200 rounded-md dark:bg-gray-700"></div>
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
