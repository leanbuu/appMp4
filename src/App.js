
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
  <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        </Routes>
         
      </div>
  </Router>
  );
}

export default App;
