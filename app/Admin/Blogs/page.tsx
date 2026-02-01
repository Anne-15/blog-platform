"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { deleteBlog } from "@/app/Riishi/Blogs/api";

type Blog = {
  id: number;
  name: string;
  title: string;
  description: string;
  headerimage: string;
  createdAt: string;
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_BASE_URL || "";
    fetch(`${base}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs || []);
      })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }
    setDeletingId(id);
    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
      setConfirmDelete(null);
    } catch {
      setDeletingId(null);
    }
    setDeletingId(null);
  };

  const sorted = [...blogs].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (loading) {
    return (
      <div className="text-neutral-500 dark:text-neutral-400">
        Loading design projects…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Design Projects
        </h1>
        <Link
          href="/Riishi/AddDesign"
          className="rounded-md bg-black dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Add design
        </Link>
      </div>

      {sorted.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">
          No design projects yet. Add one to get started.
        </p>
      ) : (
        <ul className="space-y-4">
          {sorted.map((b) => (
            <li
              key={b.id}
              className="flex flex-wrap items-center gap-4 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900"
            >
              <div className="relative h-16 w-24 rounded overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={b.headerimage || "/photo-icon.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-900 dark:text-white truncate">
                  {b.name || b.title}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {b.description}
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  {new Date(b.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={`/Riishi/Blogs/${b.id}`}
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/Admin/Blogs/Edit/${b.id}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:underline"
                >
                  Edit
                </Link>
                {confirmDelete === b.id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleDelete(b.id)}
                      disabled={!!deletingId}
                      className="text-sm text-red-600 dark:text-red-400 hover:underline disabled:opacity-50"
                    >
                      {deletingId === b.id ? "Deleting…" : "Confirm delete?"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(null)}
                      className="text-sm text-neutral-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleDelete(b.id)}
                    className="text-sm text-red-600 dark:text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
