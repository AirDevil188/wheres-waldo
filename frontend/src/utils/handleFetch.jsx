const host =
  import.meta.env.NODE_ENV === "test"
    ? "http://192.168.1.99:3000"
    : "https://backend-production-b2ea.up.railway.app";
// ;

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
