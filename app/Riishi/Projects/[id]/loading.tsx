export default function Loading() {
  return (
    <div className="flex-1 min-h-screen overflow-y-auto">
      <main className="max-w-4xl w-full mx-auto pb-10 pt-20 px-4 md:px-10">
        <div className="animate-pulse">
          {/* Back button skeleton */}
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
          
          {/* Title skeleton */}
          <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-4"></div>
          
          {/* Image skeleton */}
          <div className="w-full aspect-video bg-gray-200 rounded-lg mb-8 dark:bg-gray-700"></div>
          
          {/* Content skeletons */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-4/6"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
