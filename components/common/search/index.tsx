import React, { useState, FC } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./search.module.scss";
import Avatar from "../avatar";

export interface ISearchProps {
  searchResult?: any[];
}

const Search: FC<ISearchProps> = ({ searchResult }) => {
  const [focused, setFocus] = useState(false);
  return (
    <div className={style.searchContainer}>
      <div className={style.searchInputWraper}>
        <input
          className={style.searchInput}
          placeholder="Tìm kiếm..."
          onFocus={(e) => setFocus(true)}
          onBlur={(e) => setFocus(false)}
        />
        <button className={style.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {focused && <SearchResult items={searchResult} />}
    </div>
  );
};

interface ISearchResultProps {
  items?: any[];
}

const SearchResult: FC<ISearchResultProps> = ({ items }) => (
  <div className={style.searchResultWraper}>
    <ul>
      {!items?.length ? (
        <span>Emply</span>
      ) : (
        <li>
          <Avatar rounded={true} />
          <span>Phạm Văn Tùng</span>
        </li>
      )}
    </ul>
  </div>
);
export default Search;
