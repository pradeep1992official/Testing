import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import DeletePost from "./pages/DeletePost";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-300">
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center my-4">
              React HTTP Methods
            </h1>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/create" element={<CreatePost></CreatePost>}></Route>
              <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>
              <Route
                path="/delete/:id"
                element={<DeletePost></DeletePost>}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
