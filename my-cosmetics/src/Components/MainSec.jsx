import React, { useState, useEffect } from 'react';
import '../styles/MainSec.css';
import MySection from './MySection';
import { getData } from '../utils/pages';

const options = [
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
	},
	{
		name: '7',
		value: 7
	}
]

const getArr = (num) => {
	let arr = [];
	for (let i = 0; i < num; i++)
		arr[i] = { id: i + 1, rank: 0 }
	return arr
}

export default function MainSec({ list, from, isDef }) {
//	const [list, setList] = useState([]);
	const [listLength, setListLength] = useState(0);
	const [listofRank, setListofRank] = useState([{}]);

	let dUrl;
	switch (from) {
		case 'Home': dUrl = './Data.json'; break;
		case 'AboutItem': dUrl = '/Data.json'; break;
		case 'Ranking': dUrl = '../Data.json'; break;
		case 'Contacts': dUrl = '/Data.json'; break;
		default:
			dUrl = 'Data.json';
	}

	const setLofR = (mas) => {
		setListofRank(mas);
	}

/*	useEffect(() => {
		getData(dUrl, setList)
		console.log('UE-MainSec', listLength)
	}, [])*/

	useEffect(() => {
		setListLength(list.length)
	}, [list])

	useEffect(() => {
		setListofRank(getArr(listLength));
	}, [listLength])

	console.log(listofRank)
	console.log('listinMainSec', list)
	return (

		<section className="mainsec">
			{list && <MySection name="Новинки" list={list} lofR={listofRank} setLofR={setLofR} opt={options} clname="sec11" isDef={isDef} from={from} />}
			{/*	<MySection name="Бестселлеры" opt={options} clname="sec11" isDef={isDef} /> */}
		</section>
	)
}
