
export const apiClient = async ({ url, method = "GET", body }) => {
  try {
    const options = {
      method,
      // headers: {
      //   Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      // },
    };

    if (method !== "GET") {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res?.ok) {
      throw new Error(`API error: ${res?.status} - ${res?.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error occurred:", error);
    // throw error;  
  }
};
