/* eslint-disable react/prop-types */
import { IoArrowBackSharp } from "react-icons/io5";

import styles from "./SearchModel.module.css";
import { useState } from "react";
import { useUser } from "../../Context/User-context";
import SuggestFriendsCard from "../Suggest Friends/SuggestFriendsCard";

const SearchModel = ({ closeSearch }) => {
  const [searchUser, setSearchUser] = useState("");
  const { allUsers } = useUser();
  return (
    <div className="container">
      <div
        className={styles.model__overlay}
        onClick={() => closeSearch()}
      ></div>
      <div className={styles.model__container}>
        <form action="">
          <div className={styles.search__container}>
            <IoArrowBackSharp
              className={styles.back__icons}
              onClick={() => closeSearch()}
            />
            <input
              type="text"
              name="search"
              id="search"
              className={styles.search__inp}
              placeholder="Search"
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </div>
        </form>
        <div className="container">
          {allUsers
            ?.filter((eachUser) =>
              eachUser.firstName
                .toLowerCase()
                .includes(searchUser.toLowerCase())
            )
            .map((eachUser) => {
              return (
                <div className="container" key={eachUser?._id}>
                  {searchUser.length > 0 && (
                    <SuggestFriendsCard eachUser={eachUser} />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
