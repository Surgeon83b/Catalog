
import { avg, setRankMas } from "./pages";

export const options = (number) => {
  const res = [];
  for (let index = 0; index < number; index++) {
    res.push({ name: `${index + 1}`, value: index + 1 })
  }
  return res;
}

export const setNewRank = (list) => {

  if (!localStorage["ranking"].length) {

    localStorage.setItem("ranking", JSON.stringify(setRankMas(list.length)))
  }

  let mas = JSON.parse(localStorage["ranking"]);
  console.log('mas', mas)
  let rank;

  for (let id = 0; id < list.length; id++) {
    if (localStorage[`rate${id + 1}`] !== undefined)
      rank = avg(JSON.parse(localStorage[`rate${id + 1}`]))
    else rank = 0;
    localStorage.setItem("ranking", JSON.stringify(mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item)))
    mas = mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item);
    console.log('zap', JSON.stringify(mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item)))
  }
}

export const setInitRank = (list) => {
  if (list && list.length && (localStorage["ranking"] === undefined || !localStorage["ranking"].length)) {
    let mas = JSON.stringify(setRankMas(list.length));
    localStorage.setItem("ranking", mas)
  }
}

export const getSortedList = (list, sortedArr) => {
  if (list?.length && sortedArr.length) {
    let sortedL = [];
    for (let index = 0; index < list.length; index++) {
      sortedL.push(list?.find(item => item?.id === sortedArr[index]?.id))
    }
    return sortedL;
  }
}

export const getSortedArr = (list) => {
  let mas = JSON.parse(localStorage.getItem("ranking"));
  if (mas.length)
    return mas.sort((a, b) => b.rank - a.rank)
  else
    return list;
}
