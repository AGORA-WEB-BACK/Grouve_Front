import React, { useState } from "react";
import "./CreateGroupModal.css";

const CreateGroupModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        groupName: "",
        groupLeaderEmail: "",
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`모임 생성 완료!\n모임 이름: ${formData.groupName}\n모임장 이메일: ${formData.groupLeaderEmail}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>모임 생성</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <label>
                        모임 이름:
                        <input
                            type="text"
                            name="groupName"
                            value={formData.groupName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        모임장 이메일:
                        <input
                            type="email"
                            name="groupLeaderEmail"
                            value={formData.groupLeaderEmail}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        설명:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                        />
                    </label>
                    <label>
                        카테고리:
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">선택하세요</option>
                            <option value="technology">기술</option>
                            <option value="sports">스포츠</option>
                            <option value="education">교육</option>
                            <option value="hobby">취미</option>
                        </select>
                    </label>
                    <div className="modal-buttons">
                        <button type="submit" className="modal-button confirm">
                            생성
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
