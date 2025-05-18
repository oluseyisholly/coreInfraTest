import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Layout } from "./components/layout";
import { Dashboard } from "./components/dashboard";

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
