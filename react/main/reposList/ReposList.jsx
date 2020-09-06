import React from "react";

function RepostList(props) {
    const list = props.URLReposList.map((value, item) => {
        return <li key={value.URL + "-" + item}>{value.URL}</li>
    })
        .reverse();
    return (
        <ul>
            {list}
        </ul>
    )
}

export default RepostList;