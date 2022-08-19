import { useEffect, useState } from "react";
import { DUMMY_BLOGPOSTS } from "../MainPage";

import SearchBar from "./searchBar/SearchBar";
import SideBarLinks from "./sideBarLinks/SideBarLinks";

const SideBar = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const newTags: string[] = [];
    DUMMY_BLOGPOSTS.forEach((post) => {
      newTags.push(...post.tags);
    });
    setTags(newTags);
  }, []);

  return (
    <div style={{ flexBasis: "25%" }}>
      <SearchBar />
      <SideBarLinks title="Popular Tags" tags={tags} />
    </div>
  );
};

export default SideBar;
