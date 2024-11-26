import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>GROUVE 소개</h1>
            <p>
                GROUVE는 "Group"과 "Groove"를 결합한 이름으로, 사람들이 모여 신나게 리듬을 타듯 협력하고
                소통하는 공간이라는 의미입니다.
            </p>
            <div className="features">
                <div className="feature">
                    <h3>간편한 그룹 생성</h3>
                    <p>요구되는 몇 단계만으로 누구나 그룹을 만들고 커뮤니티를 시작할 수 있습니다.</p>
                </div>
                <div className="feature">
                    <h3>효율적인 커뮤니티 연결</h3>
                    <p>끝없는 검색 없이도 관심사에 맞는 그룹을 쉽게 찾을 수 있습니다.</p>
                </div>
                <div className="feature">
                    <h3>아이디어 실현</h3>
                    <p>직접 그룹을 만들어 자신의 비전을 반영한 모임을 손쉽게 조직할 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
