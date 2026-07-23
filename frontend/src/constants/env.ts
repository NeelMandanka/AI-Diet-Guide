const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error(
    "Missing VITE_API_BASE_URL. Please check your .env file."
  );
}

export const env = Object.freeze({
  apiBaseUrl: API_BASE_URL,
});