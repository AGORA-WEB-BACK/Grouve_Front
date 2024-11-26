import React, { useState } from "react";
import "./CreateGroupModal.css";

const CreateGroupModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        groupLeader: "",
        groupName: "",
        description: "",
        participants: "",
        createdDate: "",
        roles: "",
        category: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                image: URL.createObjectURL(file), // 이미지 미리보기 URL 생성
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`모임 생성 완료!\n모임 이름: ${formData.groupName}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">모임 생성</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-section">
                        <label className="image-upload-label">
                            <div className="image-placeholder">
                                {formData.image ? (
                                    <img src={formData.image} alt="Preview" className="image-preview" />
                                ) : (
                                    "이미지 업로드"
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="image-upload-input"
                            />
                        </label>
                        <div className="form-group">
                            <label>모임장:</label>
                            <input
                                type="text"
                                name="groupLeader"
                                value={formData.groupLeader}
                                onChange={handleChange}
                                placeholder="모임장의 이름을 입력하세요"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>모임 이름:</label>
                            <input
                                type="text"
                                name="groupName"
                                value={formData.groupName}
                                onChange={handleChange}
                                placeholder="모임 이름을 입력하세요"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>카테고리:</label>
                        <div className="category-buttons">
                            {["학습", "취미", "자기계발", "기타"].map((cat) => (
                                <button
                                    type="button"
                                    key={cat}
                                    className={`category-button ${formData.category === cat ? "active" : ""}`}
                                    onClick={() => setFormData((prevData) => ({ ...prevData, category: cat }))}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="form-details">
                        <div className="form-group">
                            <label>소개 및 목적:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="모임의 소개와 목적을 입력하세요"
                                rows="3"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>참여자:</label>
                            <input
                                type="text"
                                name="participants"
                                value={formData.participants}
                                onChange={handleChange}
                                placeholder="참여자 목록을 입력하세요"
                            />
                        </div>
                        <div className="form-group">
                            <label>모임 생성일:</label>
                            <input
                                type="date"
                                name="createdDate"
                                value={formData.createdDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>역할 분담:</label>
                            <input
                                type="text"
                                name="roles"
                                value={formData.roles}
                                onChange={handleChange}
                                placeholder="역할 분담 내용을 입력하세요"
                            />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="modal-button confirm">
                            제출
                        </button>
                        <button type="button" className="modal-button cancel" onClick={onClose}>
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGroupModal;
