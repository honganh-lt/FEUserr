import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import { useNavigate } from 'react-router-dom';  // Thêm hook useNavigate để chuyển hướng
import '../style/MockUsers.css';
// import Login from './RLogin'; 
// import Register from './Register';

export default function MockUsers() {
  const [users, setUsers] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Khởi tạo hook useNavigate

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const resp = await axiosLocalApi.get("users");
    setUsers(resp.data);
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

  const elementUsers = users.map((item, index) => {
    return (
      <div className='category' key={index}>
        <div className="container">
          <div className="course">
            <a href="/">{item.subject}</a>
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
          src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
          />
        <div>
          <div className="search-bar">
            <input placeholder="Tìm kiếm..." type="text" />
            <i className="fas fa-search"></i>
          </div>

          <div className="nav-links">
            <a href="/">TRANG CHỦ</a>
            <a href="/revision">ÔN TẬP</a>
            <a href="/exams">BÀI THI</a>
          </div>
        </div>
        <div className='header-img'>
      <img
        alt=""
        // height={60}
        src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
        // width={60}
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
    src="https://s3-alpha-sig.figma.com/img/a15a/4d08/b2549db74d0736a6c6038f2c86f73832?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDdSmGt-4-O8PCfDffxF8XBydPX8~dkhFsXkc6J2~m47YeSFo-YnC8CLT9rp62dsHLPEOl8ul~srf0mnaUkjI8tAgE-ocOYj7d-pAcRq5cS-8UfXDyZt~-qk0QhEQZuagabRcL6DCmst5RQ16Z5rX5M3QC81ZygXU6zrltZIe4Pu4~HYhpK86qWoWCYlA1O~sUgWnVSNUg6yPGE5dwZLMasFZszpoYrG7fCDZen01Psg-8I91mDPwam3rcTsw5pVtLdMhN1XZdM8UdDSLuGVy-4QlDOGf2BWvf~iLXi7pxnD5lK-EL0GerN6TXiRREcaUUPM8gvuVK4~OGKoqUGrtg__"
    width={800}
  />
</div>
</main>

      <div className='category'>
        {elementUsers}
      </div>
    </div>
  );
}
