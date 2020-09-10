import React from "react";

function ReposList(props) {
    const list = props.reposList.map((value, item) => {
        return <li key={value.repoName + "-" + item}>{value.repoName}</li>
    })
        .reverse();
    return (
        <ol>
            {list}
        </ol>
    )
}

export default ReposList;