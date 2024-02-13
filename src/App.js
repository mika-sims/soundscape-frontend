import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/signin" element={<h1>Sign in</h1>} />
          <Route path="/signup" element={<h1>Sign up</h1>} />
          <Route element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
