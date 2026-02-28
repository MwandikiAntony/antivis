const BASE_URL = "https://your-backend-url.com";

export const getChannels = async () => {
  try {
    const res = await fetch(`${BASE_URL}/channels`);
    return await res.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};