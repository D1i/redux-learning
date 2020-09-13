import React from "react";
import style from "./style";

function ReposList(props) {
	const list = props.reposList.map((value, item) => {
		return <li key={`${value.repoName}-${item}`}>{value.repoName}</li>;
	});
	return <ol className={style.list}>{list}</ol>;
}

export default ReposList;
