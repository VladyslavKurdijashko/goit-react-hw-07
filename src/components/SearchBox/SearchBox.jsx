import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={styles.input}
    />
  );
};

export default SearchBox;
