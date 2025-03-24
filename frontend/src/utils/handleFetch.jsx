const host =
  import.meta.env.NODE_ENV === "test" ? "http://192.168.1.99:3000" : "railway";
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
