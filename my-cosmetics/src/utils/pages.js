export const pages = {
  p1: "КАТАЛОГ",
  p2: "РЕЙТИНГ ПРОДУКТОВ",
  p3: "КОНТАКТЫ"
}

export const getPagesCount = (totalCount, limit) => {
  return (Math.ceil(totalCount / limit))
}

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
}

export async function getData(url) {
  const data = await fetch(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  return await data.json();
}
