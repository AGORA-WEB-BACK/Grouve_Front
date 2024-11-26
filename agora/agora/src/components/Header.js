import React from "react";
import { Link } from "react-router-dom"; // Link 추가
import "./Header.css";

function Header() {
    return (
        <header className="header">
            {/* GROUVE 로고 클릭 시 홈으로 이동 */}
            <div className="logo">
                <Link to="/">GROUVE</Link> {/* Link로 홈 페이지로 이동 */}
            </div>
            <nav className="nav">
                <Link to="/">홈</Link>
                <Link to="/about">소개</Link>
                <Link to="/rules">규칙</Link>
                <Link to="/create">모임 생성하기(게시판)</Link> {/* 모임 생성하기 */}
            </nav>
        </header>
    );
}

export default Header;
