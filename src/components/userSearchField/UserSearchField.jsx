import ClearSearchData from "./clearSearchData/ClearSearchData";
import SearchInput from "./searchInput/SearchInput";
import "./UserSearchField.css";

function UserSearchField(props) {
  const { searchValue, setSearchValue, resetData, setResetData } =
    props.searchProps;
  return (
    <div className="user_search_field">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <ClearSearchData setSearchValue={setSearchValue}  resetData={resetData} setResetData={setResetData}/>
    </div>
  );
}

export default UserSearchField;
