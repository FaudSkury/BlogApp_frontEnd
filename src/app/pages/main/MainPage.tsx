import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

import MainBar from "./mainBar/MainBar";
import SideBar from "./sideBar/SideBar";
import AuthorsBar from "./sortedPostsBar/SortedPostsBar";
import WriteBar from "./writeBar/WriteBar";

import classes from "./MainPage.module.css";

export type Post = {
  title: string;
  author: string;
  content: string;
  tags: string[];
  date: Date;
};

export const DUMMY_BLOGPOSTS: Post[] = [
  {
    title: "Lorem Ipsum",
    author: "Bartosz Gembala",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim semper neque, eget malesuada mauris laoreet dignissim. Curabitur vulputate nulla nec orci volutpat, maximus lacinia felis facilisis. In hac habitasse platea dictumst. Nam tristique ante eu erat condimentum viverra. Cras ligula augue, aliquam vitae feugiat quis, semper sed magna. Integer facilisis nibh a quam finibus, nec dapibus ex tempor. In hac habitasse platea dictumst. Maecenas vel purus condimentum, tempor elit sit amet, consequat metus. Ut vitae laoreet ante. \n Aliquam non ex at justo iaculis pretium. Cras vitae vehicula neque. Nam volutpat, libero quis tempor fermentum, nisl ligula commodo est, ut sodales augue neque in purus. Phasellus nulla risus, efficitur non lacinia aliquet, imperdiet at est. Vivamus gravida lorem vel maximus cursus. Fusce interdum auctor sodales. Phasellus convallis lacus ac volutpat interdum. Curabitur sed rhoncus justo, non scelerisque eros. Suspendisse potenti. Fusce sollicitudin laoreet urna, sit amet tempor sapien mattis a. Nam sit amet laoreet magna. Quisque ac laoreet risus, nec placerat nulla. \n Donec mattis justo convallis, finibus metus ut, molestie lorem. Nunc nec imperdiet ante. Praesent maximus dui sit amet elit dictum tincidunt eu nec nisi. Duis et lectus nunc. Etiam et mi in felis pulvinar tristique id vitae lorem. Curabitur mollis erat rutrum mauris gravida, eget sagittis eros varius. Aliquam et erat nulla. Sed quam dolor, venenatis id velit ut, blandit iaculis ipsum. Sed quis dignissim nisl, eu eleifend orci. Aenean eu scelerisque enim, in aliquet velit. Quisque in suscipit ligula. In hac habitasse platea dictumst. Sed eleifend pellentesque justo, sit amet hendrerit sapien pulvinar nec. Pellentesque ac urna a mauris hendrerit fringilla at a justo. \n Suspendisse et ipsum cursus, vestibulum leo in, euismod sem. Mauris lectus neque, lacinia non mauris et, condimentum scelerisque enim. Ut sit amet orci vitae nulla tincidunt commodo. Integer consequat nisi vitae elit mollis, sed pellentesque tortor rutrum. Nulla velit mi, semper ut tellus eget, rutrum sodales purus. Cras nec venenatis libero. Pellentesque non arcu eu metus molestie rhoncus at facilisis erat. Morbi porta neque nunc, quis sagittis lacus dictum eget. Aenean eget tellus eget augue malesuada interdum sed ac purus. Suspendisse potenti. \n Donec ultricies nunc ornare ligula suscipit, sed aliquam sem malesuada. Donec ut risus consectetur, maximus sapien sed, placerat nulla. Nunc placerat porta convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel venenatis ipsum. Proin lectus quam, sagittis sit amet arcu quis, feugiat suscipit ligula. Nulla id enim leo. Donec vestibulum imperdiet dui non egestas. Quisque elementum enim nec sem aliquam tristique. Sed elit neque, fringilla nec tempor vitae, luctus sed risus. Vestibulum tristique malesuada libero, a porttitor justo scelerisque ac. Ut nec enim varius, elementum dui a, ultrices ante. Sed et ligula vel neque sodales scelerisque. Pellentesque lacinia nisl id augue suscipit, in sagittis lectus pharetra. Sed ut ex justo.",
    tags: ["Lorem", "Ipsum"],
    date: new Date(),
  },
  {
    title: "Lorem Ipsum",
    author: "Bartosz Gembala",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim semper neque, eget malesuada mauris laoreet dignissim. Curabitur vulputate nulla nec orci volutpat, maximus lacinia felis facilisis. In hac habitasse platea dictumst. Nam tristique ante eu erat condimentum viverra. Cras ligula augue, aliquam vitae feugiat quis, semper sed magna. Integer facilisis nibh a quam finibus, nec dapibus ex tempor. In hac habitasse platea dictumst. Maecenas vel purus condimentum, tempor elit sit amet, consequat metus. Ut vitae laoreet ante. \n Aliquam non ex at justo iaculis pretium. Cras vitae vehicula neque. Nam volutpat, libero quis tempor fermentum, nisl ligula commodo est, ut sodales augue neque in purus. Phasellus nulla risus, efficitur non lacinia aliquet, imperdiet at est. Vivamus gravida lorem vel maximus cursus. Fusce interdum auctor sodales. Phasellus convallis lacus ac volutpat interdum. Curabitur sed rhoncus justo, non scelerisque eros. Suspendisse potenti. Fusce sollicitudin laoreet urna, sit amet tempor sapien mattis a. Nam sit amet laoreet magna. Quisque ac laoreet risus, nec placerat nulla. \n Donec mattis justo convallis, finibus metus ut, molestie lorem. Nunc nec imperdiet ante. Praesent maximus dui sit amet elit dictum tincidunt eu nec nisi. Duis et lectus nunc. Etiam et mi in felis pulvinar tristique id vitae lorem. Curabitur mollis erat rutrum mauris gravida, eget sagittis eros varius. Aliquam et erat nulla. Sed quam dolor, venenatis id velit ut, blandit iaculis ipsum. Sed quis dignissim nisl, eu eleifend orci. Aenean eu scelerisque enim, in aliquet velit. Quisque in suscipit ligula. In hac habitasse platea dictumst. Sed eleifend pellentesque justo, sit amet hendrerit sapien pulvinar nec. Pellentesque ac urna a mauris hendrerit fringilla at a justo. \n Suspendisse et ipsum cursus, vestibulum leo in, euismod sem. Mauris lectus neque, lacinia non mauris et, condimentum scelerisque enim. Ut sit amet orci vitae nulla tincidunt commodo. Integer consequat nisi vitae elit mollis, sed pellentesque tortor rutrum. Nulla velit mi, semper ut tellus eget, rutrum sodales purus. Cras nec venenatis libero. Pellentesque non arcu eu metus molestie rhoncus at facilisis erat. Morbi porta neque nunc, quis sagittis lacus dictum eget. Aenean eget tellus eget augue malesuada interdum sed ac purus. Suspendisse potenti. \n Donec ultricies nunc ornare ligula suscipit, sed aliquam sem malesuada. Donec ut risus consectetur, maximus sapien sed, placerat nulla. Nunc placerat porta convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel venenatis ipsum. Proin lectus quam, sagittis sit amet arcu quis, feugiat suscipit ligula. Nulla id enim leo. Donec vestibulum imperdiet dui non egestas. Quisque elementum enim nec sem aliquam tristique. Sed elit neque, fringilla nec tempor vitae, luctus sed risus. Vestibulum tristique malesuada libero, a porttitor justo scelerisque ac. Ut nec enim varius, elementum dui a, ultrices ante. Sed et ligula vel neque sodales scelerisque. Pellentesque lacinia nisl id augue suscipit, in sagittis lectus pharetra. Sed ut ex justo.",
    tags: ["Lorem"],
    date: new Date(),
  },
  {
    title: "Lorem Ipsum",
    author: "Karolina Gwóźdź",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim semper neque, eget malesuada mauris laoreet dignissim. Curabitur vulputate nulla nec orci volutpat, maximus lacinia felis facilisis. In hac habitasse platea dictumst. Nam tristique ante eu erat condimentum viverra. Cras ligula augue, aliquam vitae feugiat quis, semper sed magna. Integer facilisis nibh a quam finibus, nec dapibus ex tempor. In hac habitasse platea dictumst. Maecenas vel purus condimentum, tempor elit sit amet, consequat metus. Ut vitae laoreet ante. \n Aliquam non ex at justo iaculis pretium. Cras vitae vehicula neque. Nam volutpat, libero quis tempor fermentum, nisl ligula commodo est, ut sodales augue neque in purus. Phasellus nulla risus, efficitur non lacinia aliquet, imperdiet at est. Vivamus gravida lorem vel maximus cursus. Fusce interdum auctor sodales. Phasellus convallis lacus ac volutpat interdum. Curabitur sed rhoncus justo, non scelerisque eros. Suspendisse potenti. Fusce sollicitudin laoreet urna, sit amet tempor sapien mattis a. Nam sit amet laoreet magna. Quisque ac laoreet risus, nec placerat nulla. \n Donec mattis justo convallis, finibus metus ut, molestie lorem. Nunc nec imperdiet ante. Praesent maximus dui sit amet elit dictum tincidunt eu nec nisi. Duis et lectus nunc. Etiam et mi in felis pulvinar tristique id vitae lorem. Curabitur mollis erat rutrum mauris gravida, eget sagittis eros varius. Aliquam et erat nulla. Sed quam dolor, venenatis id velit ut, blandit iaculis ipsum. Sed quis dignissim nisl, eu eleifend orci. Aenean eu scelerisque enim, in aliquet velit. Quisque in suscipit ligula. In hac habitasse platea dictumst. Sed eleifend pellentesque justo, sit amet hendrerit sapien pulvinar nec. Pellentesque ac urna a mauris hendrerit fringilla at a justo. \n Suspendisse et ipsum cursus, vestibulum leo in, euismod sem. Mauris lectus neque, lacinia non mauris et, condimentum scelerisque enim. Ut sit amet orci vitae nulla tincidunt commodo. Integer consequat nisi vitae elit mollis, sed pellentesque tortor rutrum. Nulla velit mi, semper ut tellus eget, rutrum sodales purus. Cras nec venenatis libero. Pellentesque non arcu eu metus molestie rhoncus at facilisis erat. Morbi porta neque nunc, quis sagittis lacus dictum eget. Aenean eget tellus eget augue malesuada interdum sed ac purus. Suspendisse potenti. \n Donec ultricies nunc ornare ligula suscipit, sed aliquam sem malesuada. Donec ut risus consectetur, maximus sapien sed, placerat nulla. Nunc placerat porta convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel venenatis ipsum. Proin lectus quam, sagittis sit amet arcu quis, feugiat suscipit ligula. Nulla id enim leo. Donec vestibulum imperdiet dui non egestas. Quisque elementum enim nec sem aliquam tristique. Sed elit neque, fringilla nec tempor vitae, luctus sed risus. Vestibulum tristique malesuada libero, a porttitor justo scelerisque ac. Ut nec enim varius, elementum dui a, ultrices ante. Sed et ligula vel neque sodales scelerisque. Pellentesque lacinia nisl id augue suscipit, in sagittis lectus pharetra. Sed ut ex justo.",
    tags: ["Lorem", "Ipsum"],
    date: new Date(),
  },
];

const MainPage = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <main className={classes["mainPage-container"]}>
      <SideBar />
      <Routes>
        <Route path="/" element={<MainBar />} />
        <Route
          path="/author/:authorName"
          element={<AuthorsBar posts={DUMMY_BLOGPOSTS} />}
        />
        <Route
          path="/post/:postTitle"
          element={<AuthorsBar posts={DUMMY_BLOGPOSTS} />}
        />
        {auth.isLoggedIn && <Route path="/write" element={<WriteBar />} />}

        <Route path="*" element={<MainBar />} />
      </Routes>
    </main>
  );
};

export default MainPage;
