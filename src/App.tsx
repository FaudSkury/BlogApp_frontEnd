import Header from "./app/components/shared/header/Header";
import MainPage from "./app/pages/main/MainPage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
