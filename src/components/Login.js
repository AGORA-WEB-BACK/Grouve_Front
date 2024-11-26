import React from 'react';
import { Link } from 'react-router-dom';
import characterImage from '../assets/character1.png';
import LoginForm from '../components/LoginForm';

function H1() {
    return <h1 style={{ fontSize: '36px', margin: '10px 0', color: '#000' }}>Sign in to</h1>;
}

function H2() {
    return <h2 style={{ fontSize: '32px', color: 'orange', fontWeight: 'bold', margin: '10px 0' }}>grouve is simply</h2>;
}

const Login = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#fff9f0' }}>
            {/* 왼쪽 섹션 */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '50px',
                    backgroundColor: '#fff9f0',
                }}
            >
                {/* 로고 삭제된 부분 */}
                <div style={{ textAlign: 'left', marginTop: '40px' }}>
                    <H1 />
                    <H2 />
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        새로운 아이디를 만들 필요 없이 빠르게 <br />
                        이메일을 통한 간편 로그인
                    </p>
                </div>
                <img
                    src={characterImage}
                    alt="Sign in illustration"
                    style={{ width: '300px', height: 'auto', alignSelf: 'flex-end' }}
                />
            </div>

            {/* 오른쪽 섹션 */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fdf2e9',
                    padding: '50px',
                    borderLeft: '1px solid #ddd',
                }}
            >
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '20px' }}>로그인</h3>
                    <LoginForm />
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        아직 계정이 없으신가요?{' '}
                        <Link to="/signup" style={{ color: 'orange', textDecoration: 'none' }}>
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
