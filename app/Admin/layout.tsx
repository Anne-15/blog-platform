import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-20 px-4 pb-10">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-4 mb-8 text-sm">
          <Link
            href="/Admin"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Admin
          </Link>
          <Link
            href="/Admin/Projects"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Software Projects
          </Link>
          <Link
            href="/Admin/Blogs"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Design Projects
          </Link>
          <Link
            href="/Riishi"
            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 ml-auto"
          >
            Back to site
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
