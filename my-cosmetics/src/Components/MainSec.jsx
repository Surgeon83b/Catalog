import React, { useState, useEffect } from 'react';
import '../styles/MainSec.css';
import MySection from './MySection';

const options = [
	{
		name: '2',
		value: 2,
	},
	{
		name: '3',
		value: 3,
	},
	{
		name: '5',
		value: 5
	}
]

export default function MainSec({ isDef }) {
	return (
		<section className="mainsec">
			<MySection name="Новинки" opt={options} clname="sec11" isDef={isDef} />
			<MySection name="Бестселлеры" opt={options} clname="sec11" isDef={isDef} />
		</section>
	)
}
