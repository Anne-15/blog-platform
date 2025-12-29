// Client-side API functions that use fetch (safe for client components)
export const addDesign = async (values: any) => {
  try {
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_BASE_URL || 'https://www.riishi.net';
    
    const res = await fetch(`${baseUrl}/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error(`Failed to create blog: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

