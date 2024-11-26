import React from "react";
import "./Rules.css";
import requestFormImage from "../assets/image.png"; // 업로드된 이미지 경로

const Rules = () => {
    return (
        <div className="rules">
            <div className="rules-content">
                <img src={requestFormImage} alt="모임 생성 신청서" className="rules-image" />
                <div className="rules-text">
                    <h2>1. 모임 생성 조건</h2>
                    <p>
                        - 모임은 플랫폼에서 제공하는 기본 틀에 따라 만들어야 합니다. 다양한 정보를 입력할 수 있는 구조를
                        제공합니다.
                    </p>
                    <p>
                        - 모임 생성이 완료되기 전에 필요한 항목을 모두 기입해야 합니다. 추가된 정보는 참여자들이 모임의
                        내용을 쉽게 이해하도록 지원합니다.
                    </p>
                    <h2>2. 운영자의 역할</h2>
                    <p>
                        - 웹사이트는 모임의 생성 과정을 지원합니다. 사용자는 제공된 틀을 이용해 모임을 쉽게 생성할 수
                        있으며, 생성된 모임에 대해서는 게시판에 등록된 형태로 업로드됩니다.
                    </p>
                    <h2>3. 모임 승인 및 게시</h2>
                    <p>
                        - 모든 모임은 내부 규정에 따라 검토한 후 게시판에 올라갑니다. 부적절하거나 규칙을 위반한 모임은
                        승인되지 않으며 게시되지 않을 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rules;
