import { handleFetch } from "./handleFetch";
export const getLevels = async () => {
  const res = await handleFetch("/", undefined, "get");

  if (res.ok) {
    return await res.json();
  }

  if (res.status === 404) {
    throw new Error("Levels Not Found!");
  }
};
