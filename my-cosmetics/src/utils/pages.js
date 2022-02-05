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

export async function getData(url, set) {
  fetch(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      // console.log(response)
      return response.json();
    })
    .then(function (myJson) {
      //  console.log(myJson);
      set(myJson);
    })
}

export const avg = (arr) => {
  let sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  return Number((sum / arr.length).toFixed(2));
}

export const setRankMas = (length) => {
  const res = [];
  for (let index = 0; index < length; index++) {
    res[index]={id: index+1, rank: 0}
  }
  return res;
}

export const options = [
  {
    name: '1',
    value: 1,
  },
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
  {
    name: '5',
    value: 5
  },
  {
    name: '6',
    value: 6
  }
]
