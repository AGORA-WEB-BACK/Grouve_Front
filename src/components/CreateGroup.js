import React, { useState } from "react";
import "../components/CreateGroup.css";
import logoImage from "../assets/logo.png"; // 로고 이미지 경로
import CreateGroupModal from "./CreateGroupModal"; // 모달 컴포넌트 임포트

const CreateGroup = () => {
    const [dataList, setDataList] = useState([
        { id: 1, username: "John Doe", name: "React Study Group", members: 10, date: "2024-01-01", category: "Study", approved: false },
        { id: 2, username: "Jane Smith", name: "JavaScript Learners", members: 15, date: "2024-01-05", category: "Workshop", approved: false },
        { id: 3, username: "Alice Brown", name: "Python Developers", members: 8, date: "2024-01-10", category: "Networking", approved: true },
    ]);

    const [isModalOpen, setModalOpen] = useState(false);

    // 모달 열기/닫기
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // 새 모임 데이터 추가
    const handleAddGroup = (newGroup) => {
        const newGroupData = {
            ...newGroup,
            id: dataList.length + 1,
            approved: false,
        };
        setDataList([...dataList, newGroupData]);
        closeModal(); // 모달 닫기
    };

    const toggleApproval = (id) => {
        setDataList((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, approved: !item.approved } : item
            )
        );
    };

    return (
        <div className="CreateGroup">
            <div className="header">
                <div className="logo-and-title">
                    <img src={logoImage} alt="GROUVE Logo" className="logo-image" />
                    <h1 className="create-group-title">모임 게시판</h1>
                </div>
            </div>
            <div className="content">
                <div className="button-container">
                    <button onClick={openModal} className="create-button">
                        모임 생성
                    </button>
                </div>
                <h2>모임 목록</h2>
                <table className="data-table">
                    <thead>
                    <tr>
                        <th style={{ width: "15%" }}>사용자 이름</th>
                        <th style={{ width: "25%" }}>모임명</th>
                        <th style={{ width: "10%" }}>인원</th>
                        <th style={{ width: "15%" }}>등록일</th>
                        <th style={{ width: "15%" }}>카테고리</th>
                        <th style={{ width: "10%" }}>승인</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.members}</td>
                            <td>{item.date}</td>
                            <td>{item.category}</td>
                            <td>
                                <button
                                    className={`approval-btn ${item.approved ? "approved" : "pending"}`}
                                    onClick={() => toggleApproval(item.id)}
                                >
                                    {item.approved ? "승인됨" : "대기중"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 모달 컴포넌트 */}
            <CreateGroupModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddGroup} />
        </div>
    );
};

export default CreateGroup;
