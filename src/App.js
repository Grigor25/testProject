import { useMemo, useState } from "react";
import "./App.css";
import AppTittle from "./components/appTittle/AppTittle";
import { UsersDataTable } from "./components/usersDataTable/UsersDataTable";
import UserSearchField from "./components/userSearchField/UserSearchField";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [resetData, setResetData] = useState(false);

  const searchProps = useMemo(() => {
    return {
      resetData,
      setResetData,
      searchValue,
      setSearchValue,
    };
  }, [resetData, setResetData, searchValue, setSearchValue]);

  return (
    <div className="App">
      <AppTittle />
      <UserSearchField searchProps={searchProps} />
      <UsersDataTable searchProps={searchProps} />
    </div>
  );
}

export default App;
