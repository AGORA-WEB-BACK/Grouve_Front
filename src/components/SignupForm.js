import React from 'react';

const SignupForm = () => {
    return (
        <form style={{ width: '100%' }}>
            {/* 이메일 입력 필드 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    style={{
                        flex: 1,
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px 0 0 8px',
                        backgroundColor: '#fff7f0',
                        outline: 'none',
                        fontSize: '14px',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <button
                    type="button"
                    style={{
                        padding: '12px 20px',
                        backgroundColor: 'orange',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '14px',
                        cursor: 'pointer',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    중복확인
                </button>
            </div>

            {/* 인증번호 입력 필드 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="인증번호 입력"
                    style={{
                        flex: 1,
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px 0 0 8px',
                        backgroundColor: '#fff7f0',
                        outline: 'none',
                        fontSize: '14px',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <button
                    type="button"
                    style={{
                        padding: '12px 20px',
                        backgroundColor: 'orange',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '14px',
                        cursor: 'pointer',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    인증번호 받기
                </button>
            </div>

            {/* 비밀번호 입력 필드 */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="password"
                    placeholder="Password"
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#f7f9ff',
                        outline: 'none',
                        fontSize: '14px',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                        marginBottom: '10px',
                    }}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#f7f9ff',
                        outline: 'none',
                        fontSize: '14px',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>

            {/* 등록 버튼 */}
            <button
                type="submit"
                style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: 'orange',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                등록하기
            </button>
        </form>
    );
};

export default SignupForm;
