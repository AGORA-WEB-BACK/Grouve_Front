import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Rules from "./components/Rules";
import CreateGroup from "./components/CreateGroup/CreateGroup";
import Login from "./components/Login"; // 로그인 컴포넌트 추가
import Signup from "./components/Signup"; // 회원가입 컴포넌트 추가

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/create" element={<CreateGroup />} />
                <Route path="/login" element={<Login />} /> {/* 로그인 경로 */}
                <Route path="/signup" element={<Signup />} /> {/* 회원가입 경로 */}
            </Routes>
        </Router>
    );
}

export default App;
