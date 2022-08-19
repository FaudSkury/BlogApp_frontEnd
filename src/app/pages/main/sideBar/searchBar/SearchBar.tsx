import { Fragment, useState } from "react";

import Button from "../../../../components/shared/button/Button";
import Dropdown from "../../../../components/shared/dropdown/Dropdown";
import Input from "../../../../components/shared/input/Input";

import classes from "./SearchBar.module.css";

const DUMMY_CATEGORIES = ["Names", "Places", "People", "Pralki"];

const SearchBar = () => {
  const [searchHelpers, setSearchHelpers] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    let filteredData: string[] = [];
    if (value === "") {
      filteredData = [];
    } else {
      filteredData = DUMMY_CATEGORIES.filter((cat) => {
        return cat.toLowerCase().includes(value.toLowerCase());
      });
    }
    setSearchHelpers(filteredData);
  };

  return (
    <Fragment>
      <div className={classes["searchBar-container"]}>
        <Input
          onChange={handleSearch}
          className="search"
          name="search"
          type="text"
        />
        <Button className="search">GO</Button>
      </div>
      {searchHelpers.length > 0 && <Dropdown options={searchHelpers} />}
    </Fragment>
  );
};

export default SearchBar;
