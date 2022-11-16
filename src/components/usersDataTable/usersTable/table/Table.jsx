import deleteIcon from "./../../../../img/icon/cancel.png";


function Table(props) {
    const {usersCountPerPage,setModalOpen,setDeletingUser} = props.usersTableProps
    return <table
    className="data_table"
  >
    <thead>
      <tr className="table_data_header">
        <td className="table_data_username_tittle">Имя пользователя</td>
        <td>email</td>
        <td>Дата регистрации</td>
        <td>Рейтинг</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {usersCountPerPage.map((elem, ind) => {
        const { username, email, registration_date, rating } = elem;
        return (
          <tr className="data_table_body" key={ind}>
            <td className="table_username">{username}</td>
            <td className="email_table_row">{email}</td>
            <td className="registracion_date_row">{registration_date}</td>
            <td className="rate_row">{rating}</td>
            <td
              className="delete_table_row"
              onClick={(username) => {
                setModalOpen(true);
                setDeletingUser(elem.username);
              }}
            >
              <img src={deleteIcon} alt="deleteIcon" />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
}

export default Table