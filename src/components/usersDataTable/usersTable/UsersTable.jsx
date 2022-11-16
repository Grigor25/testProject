import { useMemo, useState } from "react";
import { setPagesUser } from "../../../appFunctions/setPagesUsers";
import UserTableDataPagination from "../userTableDataPagination/UserTableDataPagination";
import Table from "./table/Table";
import "./UsersTable.css";

export default function UsersTable(props) {
  const [page, setPage] = useState(1);
  const { tableData, setModalOpen, setDeletingUser } =
    props.usersTableDataProps;
  const count = Math.ceil(tableData.length / 5);
  const usersCountPerPage = setPagesUser(tableData, page);
  const usersTableProps = useMemo(() => {
    return {
      page,
      count,
      setPage,
      tableData,
      setModalOpen,
      setDeletingUser,
      usersCountPerPage,
    };
  }, [
    page,
    count,
    setPage,
    tableData,
    setModalOpen,
    setDeletingUser,
    usersCountPerPage,
  ]);
  return (
    <section>
      <Table usersTableProps={usersTableProps} />
      <UserTableDataPagination usersTableProps={usersTableProps} />
    </section>
  );
}
