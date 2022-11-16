import "./ClearSearchData.css";
import clearIcon from "../../../img/icon/clean.png";

function ClearSearchData(props) {
  const { setSearchValue,setResetData,resetData } = props;
  return (
    <div className="search_icon_text_main">
      <img
        onClick={() => {
          setSearchValue("");
          setResetData(!resetData)
        }}
        src={clearIcon}
        alt="clearIcon"
      />
      <span
        onClick={() => {
          setSearchValue("");
          setResetData(!resetData)
        }}
        className="search_clear_text"
      >
        Очистить фильтр
      </span>
    </div>
  );
}

export default ClearSearchData;
