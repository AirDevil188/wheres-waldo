export const getCoordinates = (e) => {
  const rect = e.target.getBoundingClientRect();
  const eClientX = e.clientX;
  const eClientY = e.clientY;
  const width = rect.width;
  const height = rect.height;

  const x = Math.floor(((eClientX - rect.left) / width) * 100);
  const y = Math.floor(((eClientY - rect.top) / height) * 100);

  return {
    x,
    y,
  };
};
