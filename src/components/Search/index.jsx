import React from "react";

// redux
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/searchSlice";

// lodash
import debounce from "lodash.debounce";

// icons
import { TbSearch, TbX } from "react-icons/tb";

// styles
import s from "./Search.module.scss";

export default function Search() {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();

  const changeValue = () => {
    setValue(inputRef.current.value);
    changeSearchValue(inputRef.current.value);
  };

  const clearValue = () => {
    setValue("");
    dispatch(setSearch(""));
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
      console.log(`${new Date().toLocaleTimeString([], { hour12: false })}, Search:, '${str}'`);
    }, 350),
    []
  );

  console.log();

  return (
    <div className={s.root}>
      <TbSearch className={s.searchIcon} />
      <input className={s.input} onChange={changeValue} ref={inputRef} value={value} type='text' placeholder='Введите текст поиска...' />
      {value && <TbX className={s.timesIcon} onClick={clearValue} />}
    </div>
  );
}
