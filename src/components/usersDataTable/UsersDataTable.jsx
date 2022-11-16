import { useEffect, useState } from "react";
import TableSortData from "./tableSortData/TableSortData";
import DeleteUserModal from "./usersTable/deleteUserModal/DeleteUserModal";
import UsersTable from "./usersTable/UsersTable";
import "./UsersDataTable.css";
import { userDelete } from "../../appFunctions/deleteUser";
import { useMemo } from "react";

export function UsersDataTable(props) {
  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingUser, setDeletingUser] = useState("false");
  const { searchValue, resetData } = props.searchProps;

  const usersTableDataProps = useMemo(() => {
    return {
      usersData,
      setUsersData,
      tableData,
      setTableData,
      modalOpen,
      setModalOpen,
      deletingUser,
      setDeletingUser,
      userDelete,
      resetData
    };
  }, [
    usersData,
    setUsersData,
    tableData,
    setTableData,
    modalOpen,
    setModalOpen,
    deletingUser,
    setDeletingUser,
    resetData
  ]);

  useEffect(() => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then((response) => response.json())
      .then((res) => {
        setUsersData(res);
        setTableData(res);
      });
  }, []);

  useEffect(() => {
    setTableData(usersData);
  }, [usersData,resetData]);

  useEffect(() => {
    setTableData(
      [...usersData].filter((elem) => {
        const { username, email } = elem;
        return (
          username.toLowerCase().includes(searchValue.toLowerCase()) ||
          email.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    );
  }, [searchValue, modalOpen]);

  return (
    <section>
      {!!modalOpen ? (
        <DeleteUserModal usersTableDataProps={usersTableDataProps} />
      ) : null}
      <TableSortData usersTableDataProps={usersTableDataProps} />
      {!!tableData.length ? (
        <UsersTable usersTableDataProps={usersTableDataProps} />
      ) : (
        <span className="no_users_found_text">Нет найденных пользователей</span>
      )}
    </section>
  );
}
