import { useEffect, useState } from "react";
import {
  sortByRate,
  sortByRegistracionDate,
} from "../../../appFunctions/sortDataFunctions";
import "./TableSortData.css";

export default function TableSortData(props) {
  const [isSorted, setIsSorted] = useState(false);
  const { setTableData, tableData,resetData } = props.usersTableDataProps;

  useEffect(() => {
    setIsSorted(false)
  },[resetData])

  return (
    <div className="table_sort_data">
      <span className="table_data_sort">Сортировка:</span>
      <span
        onClick={() =>
          sortByRegistracionDate(
            tableData,
            setTableData,
            isSorted,
            setIsSorted
          )
        }
        className={
          isSorted === "sordetByDateHiger" ||
          isSorted === "sordetByDateLower"
            ? "table_data_sort_by_registr_active"
            : "table_data_sort_by_registr"
        }
      >
        Дата регистрации
      </span>
      <span
        onClick={() =>
          sortByRate(tableData, isSorted, setIsSorted, setTableData)
        }
        className={
          isSorted === "sortedByRateHigher" ||
          isSorted === "sortedByRateLower"
            ? "table_data_sort_by_rate_active"
            : "table_data_sort_by_rate"
        }
      >
        Рейтинг
      </span>
    </div>
  );
}
