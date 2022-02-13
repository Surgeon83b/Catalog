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

export const getArr = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++)
    arr[i] = { id: i + 1, rank: 0 }
  return arr;
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
    res[index] = { id: index + 1, rank: 0 }
  }
  return res;
}
/*
let dUrl;
  switch (from) {
    case 'Home': dUrl = './Data.json'; break;
    case 'AboutItem': dUrl = '/Data.json'; break;
    case 'Ranking': dUrl = '../Data.json'; break;
    case 'Contacts': dUrl = '/Data.json'; break;
    default:
      dUrl = 'Data.json';
  }*/
