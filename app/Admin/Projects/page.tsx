"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { deleteProject } from "@/app/Riishi/Projects/api";

type Project = {
  id: number;
  name: string;
  title: string;
  desc: string;
  image: string;
  createdAt: string;
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_BASE_URL || "";
    fetch(`${base}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
      })
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }
    setDeletingId(id);
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setConfirmDelete(null);
    } catch {
      setDeletingId(null);
    }
    setDeletingId(null);
  };

  const sorted = [...projects].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (loading) {
    return (
      <div className="text-neutral-500 dark:text-neutral-400">
        Loading projects…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Software Projects
        </h1>
        <Link
          href="/Riishi/AddProject"
          className="rounded-md bg-black dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Add project
        </Link>
      </div>

      {sorted.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">
          No projects yet. Add one to get started.
        </p>
      ) : (
        <ul className="space-y-4">
          {sorted.map((p) => (
            <li
              key={p.id}
              className="flex flex-wrap items-center gap-4 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900"
            >
              <div className="relative h-16 w-24 rounded overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={p.image || "/photo-icon.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-900 dark:text-white truncate">
                  {p.title || p.name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                  {p.desc}
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  {new Date(p.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={`/Riishi/Projects/${p.id}`}
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/Admin/Projects/Edit/${p.id}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:underline"
                >
                  Edit
                </Link>
                {confirmDelete === p.id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleDelete(p.id)}
                      disabled={!!deletingId}
                      className="text-sm text-red-600 dark:text-red-400 hover:underline disabled:opacity-50"
                    >
                      {deletingId === p.id ? "Deleting…" : "Confirm delete?"}
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
                    onClick={() => handleDelete(p.id)}
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
