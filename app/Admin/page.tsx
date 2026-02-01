import Link from "next/link";
import React from "react";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
        Admin
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Manage your portfolio content. Choose a section below.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/Admin/Projects"
          className="block p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
        >
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            Software Projects
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            View, add, edit, and delete software engineering projects.
          </p>
        </Link>
        <Link
          href="/Admin/Blogs"
          className="block p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
        >
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            Design Projects
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            View, add, edit, and delete design (UI/UX) projects.
          </p>
        </Link>
      </div>
    </div>
  );
}
