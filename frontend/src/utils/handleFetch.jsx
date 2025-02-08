const host = "http://localhost:3000";

export const handleFetch = async (endpoint, input = undefined, method) => {
  const options = {
    mode: "cors",
    method: method,
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(host + endpoint, options);
};
