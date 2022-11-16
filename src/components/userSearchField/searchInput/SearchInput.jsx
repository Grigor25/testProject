import "./SearchInput.css";

function SearchInput(props) {
    const { searchValue,setSearchValue } = props;

  return (
    <div className="search_input_main">
        <input
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
      className="search_input"
      placeholder="Поиск по имени или e-mail"
    >
    </input>
    </div>
    
  );
}

export default SearchInput;
