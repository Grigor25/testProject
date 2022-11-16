import "./DeleteUserModal.css";

export default function DeleteUserModal(props) {
  const { setModalOpen, userDelete,usersData,setUsersData,deletingUser } = props.usersTableDataProps;
  
  return (
    <div className="modal">
      <div className="modal_content">
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <div className="modal_buttons">
          <button
            className="modal_button_confirm"
            onClick={() => {
              userDelete(deletingUser, usersData, setUsersData);
              setModalOpen(false);
            }}
          >
            Да
          </button>
          <button className="modal_button_exit" onClick={() => setModalOpen(false)}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
