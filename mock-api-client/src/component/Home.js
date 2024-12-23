import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import { useNavigate } from 'react-router-dom';  // Thêm hook useNavigate để chuyển hướng
import '../style/Home.css';
// import Login from './RLogin'; 
// import Register from './Register';

export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Khởi tạo hook useNavigate

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
    getAllSubjects();
  }, []);

  const getAllSubjects = async () => {
    const resp = await axiosLocalApi.get("public/subjects");
    setSubjects(resp.data);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true); 
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/'); // Chuyển hướng về trang chủ khi đăng xuất
  };

  const elementSubjects = subjects.map((item, index) => {
    return (
      <div className='category' key={index}>
        <div className="container">
          <div className="course">
            <a href="/">{item.name}</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <header className="header">
        <img
          alt="FITA logo"
          // src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
          src='logoschool.png'

          />
        <div>
          <div className="search-bar">
            <input placeholder="Tìm kiếm..." type="text" />
            <i className="fas fa-search"></i>
          </div>

          <div className="nav-links">
            <a href="/">TRANG CHỦ</a>
            <a href="/revision">ÔN TẬP</a>
            <a href="/chooseExams">BÀI THI</a>
          </div>
        </div>
        <div className='header-img'>
      <img
        alt=""
        // height={60}
        src='hat.png'        // width={60}
      />
    </div>
        <div className="auth-links">
          {!isLoggedIn ? (
            <>
              <button onClick={handleLoginClick}>Đăng nhập</button>
              <button onClick={handleRegisterClick}>Đăng ký</button>
            </>
          ) : (
            <div>
              <i className="fas fa-user"></i>
              <button onClick={handleLogout}>Đăng xuất</button>
            </div>
          )}
        </div>
      </header>

      <main className="main-content">
<div className="image-container">
  <h1>TRẮC NGHIỆM ONLINE</h1>
  <p>Rèn luyện mỗi ngày, tự tin điểm cao</p>
  <img
    alt="Illustration of a person studying online with a computer"
    height={400}
    src='banner.jpg'    
    width={800}
  />
</div>
</main>

      <div className='category'>
        {elementSubjects}
      </div>
    </div>
  );
}
