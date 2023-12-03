import { useState } from "react";
import { usePostData } from "../../Context/Post-context";

import styles from "./Sort.module.css";

const Sort = () => {
  const [selectedSort, setSelectedSort] = useState("latest");
  const { dispatch } = usePostData();

  const handleSort = (e) => {
    e.preventDefault();
    dispatch({
      type: `SORT_POST__BY__${e.target.value.toUpperCase()}`,
    });
    setSelectedSort(e.target.value);
  };

  return (
    <div className={styles.sort__container}>
      <div className={styles.sorting__name}>
        <h3>{selectedSort}</h3>
      </div>
      <div className={styles.sorting__selector}>
        <select
          name="sort"
          id="sort"
          className={styles.select}
          value={selectedSort}
          onChange={(e) => handleSort(e)}
        >
          <option value="" disabled>
            Sort By
          </option>
          <option value="Latest">🔼 Latest</option>
          <option value="Oldest">🔽 Oldest</option>
          <option value="Most-liked">🔝 Most Liked</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
