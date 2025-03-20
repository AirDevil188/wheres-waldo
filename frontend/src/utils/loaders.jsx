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

export const getLevel = async ({ params }) => {
  const { id } = params;
  const res = await handleFetch(`/game/${id}`);

  if (res.ok) {
    return await res.json();
  }

  if (res.status === 404) {
    throw new Error("Level not Found!");
  }

  if (res.status === 403) {
    throw new Error("You are not authorized to access this page!");
  }
};

export const getPlayers = async () => {
  const res = await handleFetch(`/game/highscore`);

  console.log(res);

  if (res.ok) {
    return await res.json();
  }
};
