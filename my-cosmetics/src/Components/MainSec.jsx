import React, { useState, useEffect } from 'react';
import '../styles/MainSec.css';
import MySection from './MySection';
import { options } from '../utils/common';
import { getArr } from '../utils/pages';


export default function MainSec({ list, from, isDef }) {
	//	const [list, setList] = useState([]);
	const [listLength, setListLength] = useState(0);
	const [listofRank, setListofRank] = useState([{}]);

	useEffect(() => {
		setListLength(list?.length)
	}, [list])

	useEffect(() => {
		setListofRank(getArr(listLength));
	}, [listLength])

	console.log(listofRank)
	return (

		<section className="mainsec">
			{list.length && <MySection name="Новинки" list={list} opt={options(list.length)} clname="sec11" isDef={isDef} from={from} />}
			{/*	<MySection name="Бестселлеры" opt={options} clname="sec11" isDef={isDef} /> */}
		</section>
	)
}
