import { useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  languageList,
  removeItem,
  setActiveList,
  clearSearchKey,
  setSearchKey
} from "../../redux/multiselect";
import "./styles.css";

function SelectedItem({ value }) {
  const actionDispatch = useDispatch();

  const removeSelectedItem = () => {
    actionDispatch(removeItem(value));
  };

  return (
    <div className="ms-selected-item">
      <span>{value}</span>
      <span className="ms-selected-item-close" onClick={removeSelectedItem}>
        x
      </span>
    </div>
  );
}

function SelectedItemList() {
  const { selectedItemList = [] } = useSelector(
    (state) => state.multiSelectReducer
  );

  return (
    <div className="ms-items-panel">
      {selectedItemList.map((x: string, idx: number) => (
        <SelectedItem key={`item-${idx}`} value={x} />
      ))}
    </div>
  );
}

function OptionsList() {
  const selectRef = useRef();
  const { selectedItemList = [], searchKey = "" } = useSelector(
    (state) => state.multiSelectReducer
  );
  const actionDispatch = useDispatch();

  const filteredList = useMemo(() => {
    return languageList.filter((x) => x.indexOf(searchKey) !== -1);
  }, [searchKey]);

  const onSelectChange = () => {
    const activeOptions = Array.from(selectRef?.current?.selectedOptions).map(
      (x) => x.value
    );
    actionDispatch(setActiveList(activeOptions));
    actionDispatch(clearSearchKey({}));
  };

  // console.log({ selectedItemList });

  return (
    <div className="ms-options-panel">
      <select
        ref={selectRef}
        name="lang-options"
        id="lang-options"
        multiple
        value={selectedItemList}
        onChange={onSelectChange}
      >
        {filteredList.map((x: string, idx: number) => {
          return (
            <option key={`option-${idx}`} value={x}>
              {x}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function MultiSelect() {
  const { searchKey = "" } = useSelector((state) => state.multiSelectReducer);
  const actionDispatch = useDispatch();
  const inputRef = useRef();

  const onSearch = () => {
    const currentSearchKey = inputRef.current.value;
    actionDispatch(setSearchKey(currentSearchKey));
  };

  return (
    <>
      <div className="ms-wrapper">
        <SelectedItemList />
        <input
          ref={inputRef}
          value={searchKey}
          className="ms-input"
          placeholder="search here..."
          onChange={onSearch}
        />
      </div>
      <OptionsList />
    </>
  );
}

export { MultiSelect };
export default MultiSelect;
