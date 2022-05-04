const ListItem = ({item, hapusLogin}) => {
    return (
        
        <tr>
            <td><p>{item.username}</p></td>
            <td>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            </td>
            <td>
                <button type="button" class="btn btn-danger" onClick={() => {hapusLogin(item.id)}}>Delete</button>
            </td>
        </tr>
    )
}

export default ListItem
