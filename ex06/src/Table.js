const TableBody = (props) => {
    const { characterData, removeCharacter } = props;

    return ( <
        table >
        <
        TableHeader / >
        <
        TableBody characterData = { characterData }
        removeCharacter = { removeCharacter }
        /> < /
        table >
    )
}

<
tr key = { index } >
    <
    td > { row.firstName } < /td> <
td > { row.lastName } < /td>

<
td >
    <
    button onClick = {
        () => props.removeCharacter(index)
    } > Delete < /button> < /
    td > <
    /tr>

export default Table;