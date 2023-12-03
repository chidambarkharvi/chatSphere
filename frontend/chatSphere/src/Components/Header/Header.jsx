import { MdSearch } from "react-icons/md";

import styles from "./Header.module.css";
import SearchModel from "../../Common/Search Model/SearchModel";
import { useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const closeSearch = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className={styles.header__container}>
        <div className={styles.search__bar}>
          <input
            type="text"
            placeholder="Search"
            onClick={() => setShowSearch(true)}
          />
          <MdSearch className={styles.search__icon} />
        </div>
      </div>
      {showSearch && <SearchModel closeSearch={closeSearch} />}
    </>
  );
};

export default Header;
