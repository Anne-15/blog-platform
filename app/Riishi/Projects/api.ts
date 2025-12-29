// Client-side API functions that use fetch (safe for client components)
export const addProject = async (values: any) => {
  try {
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_BASE_URL || 'https://www.riishi.net';
    
    const res = await fetch(`${baseUrl}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error(`Failed to create project: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

