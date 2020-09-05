import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";

function App() {
  return (
    <div>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
