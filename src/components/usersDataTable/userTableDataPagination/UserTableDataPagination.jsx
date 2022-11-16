import Pagination from "@mui/material/Pagination";
import "./UserTableDataPagination.css";

function UserTableDataPagination(props) {
  const { count, page, setPage } = props.usersTableProps;
  return (
    <div className="pagination_main">
      <Pagination
        defaultPage={1}
        onChange={(evt, page) => setPage(page)}
        count={count}
        size="small"
        page={page}
      />
    </div>
  );
}

export default UserTableDataPagination;
