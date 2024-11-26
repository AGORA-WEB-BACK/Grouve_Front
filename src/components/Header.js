import React from "react";
import
{ NavLink } from "react-router-dom"; // NavLink를 사용하여 활성화된 링크를 스타일링
import "./Header.css";
import logo from "../assets/logo.png"; // 로고 이미지 파일 경로

function Header() {
    return (
        <header className="header">
            {/* 로고 클릭 시 홈으로 이동 */}
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="GROUVE Logo" className="logo-img" />
                </NavLink>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="nav">
                <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                >
                    홈
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                >
                    소개
                </NavLink>
                <NavLink
                    to="/rules"
                    className="nav-link"
                    activeClassName="active"
                >
                    규칙
                </NavLink>
                <NavLink
                    to="/create"
                    className="nav-link"
                    activeClassName="active"
                >
                    모임 생성하기(게시판)
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
