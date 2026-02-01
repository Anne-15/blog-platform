const getBaseUrl = () =>
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL || "https://www.riishi.net";

// Client-side API functions that use fetch (safe for client components)
export const addProject = async (values: any) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Failed to create project: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const updateProject = async (id: number, values: any) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/projects?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Failed to update project: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

export const deleteProject = async (id: number) => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/projects?id=${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Failed to delete project: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

