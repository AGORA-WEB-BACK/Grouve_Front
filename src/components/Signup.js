import React from 'react';
import { Link } from 'react-router-dom';
import characterImage from '../assets/character1.png';
import logoImage from '../assets/logo.png';
import SignupForm from '../components/SignupForm';

function H1() {
    return <h1 style={{ fontSize: '36px', margin: '10px 0', color: '#000' }}>Sign up to</h1>;
}

function H2() {
    return <h2 style={{ fontSize: '32px', color: 'orange', fontWeight: 'bold', margin: '10px 0' }}>grouve is simply</h2>;
}

const Signup = () => {
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
                <img src={logoImage} alt="GROOVE Logo" style={{ width: '120px', marginBottom: '20px' }} />
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
                    alt="Sign up illustration"
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
                    <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '20px' }}>회원가입</h3>
                    <SignupForm />
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        이미 계정이 있으신가요?{' '}
                        <Link to="/login" style={{ color: 'orange', textDecoration: 'none' }}>
                            로그인
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
