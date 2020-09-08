import React from "react";

function ReposList(props) {
    const list = props.reposList.map((value, item) => {
        return <li key={value.URL + "-" + item}>{value.URL}</li>
    })
        .reverse();
    return (
        <ol>
            {list}
        </ol>
    )
}

export default ReposList;