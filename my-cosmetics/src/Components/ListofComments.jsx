import React from "react";
import SingleComment from "./SingleComment";

export default function ListofComments({ list, isShowedButton, id }) {
	return (
		<>
			{list?.map((item) => <SingleComment key={item.name} name={item.name} text={item.comment} isShowedButton={isShowedButton} id={id} />)}
		</>
	)
}
