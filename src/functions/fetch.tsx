export const fetchComponent = async (title: string) => {
  const res = await fetch('http://localhost:5000/' + title);
  const data = await res.json();

  return data;
}