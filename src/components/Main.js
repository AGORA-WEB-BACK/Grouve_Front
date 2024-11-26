import React from "react";
import { useNavigate } from "react-router-dom"; // React Router navigation
import "./Main.css";
import CharacterImage from "../assets/character.png"; // 오른쪽 이미지

function Main() {
    const navigate = useNavigate(); // useNavigate 훅

    return (
        <main className="main">
            <div className="text-content">
                <h1>
                    Build Your <span className="highlight">Ideal Group</span>, Discover
                    Community!
                </h1>
                <p>지금 Grouve에 가입하고, 당신의 열정을 공유하는 사람들과 연결되고 성장하세요!</p>
                <div className="buttons">
                    {/* 버튼 클릭 시 페이지 이동 */}
                    <button className="btn login" onClick={() => navigate("/login")}>
                        로그인
                    </button>
                    <button className="btn signup" onClick={() => navigate("/signup")}>
                        회원가입
                    </button>
                </div>
            </div>
            <div className="image-content">
                <img src={CharacterImage} alt="Character" />
            </div>
        </main>
    );
}

export default Main;
