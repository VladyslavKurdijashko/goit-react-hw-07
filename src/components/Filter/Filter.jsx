import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <label className={styles.filter}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
