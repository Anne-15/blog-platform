const getBaseUrl = () =>
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL || "https://www.riishi.net";

// Client-side API functions that use fetch (safe for client components)
export const addDesign = async (values: any) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Failed to create blog: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

export const updateBlog = async (id: number, values: any) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/blogs?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Failed to update blog: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

export const deleteBlog = async (id: number) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/blogs?id=${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Failed to delete blog: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

