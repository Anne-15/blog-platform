export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Header section skeleton */}
      <div className="mt-20 flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-items-center w-full max-w-6xl">
          {/* Image skeleton */}
          <div className="w-full">
            <div className="aspect-square bg-gray-200 rounded-lg mb-10 dark:bg-gray-700"></div>
          </div>
          
          {/* Content skeleton */}
          <div className="space-y-3 w-full">
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-4/6"></div>
            <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mt-4"></div>
          </div>
        </div>
      </div>

      {/* Table of contents skeleton */}
      <div className="bg-purple-800 dark:bg-purple-200 w-full py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-3">
            <div className="h-6 bg-purple-600 dark:bg-purple-300 rounded w-24 mx-auto"></div>
            <div className="space-y-2">
              <div className="h-4 bg-purple-600 dark:bg-purple-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-purple-600 dark:bg-purple-300 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="container mx-auto flex flex-col items-center my-8 px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-4">
          <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-32 mx-auto"></div>
          <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-48 mx-auto"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
