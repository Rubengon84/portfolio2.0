import Main from "../Main";
import Footer from  "../Footer";
import css from "./App.module.css";

function App() {
  return <div className={css.app}>
    <Main />
    <Footer />
  </div>;
}

export default App;
