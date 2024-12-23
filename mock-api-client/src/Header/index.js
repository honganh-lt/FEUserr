import React, { useEffect, useState } from 'react'
import '../Header/index.css'
// import { Route, Router, Routes } from 'react-router';
// import RevisionListChap from './Revision/RevisionListChap';

export default function Headers() {
return (
  <div>
    <header className="header">
    <img 
      alt="FITA logo"
      // height={90}
      src='logoschool.png'      // width={90}
    />
    <div>
        <div className='text-header'>
            <h2>
                Trắc Nghiệm Online
            </h2>
        </div>
      
      <div className="nav-links">
        <a href="/">
          TRANG CHỦ
        </a>
        
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
      <a href="#">Đăng nhập</a>
  
    </div>
  </header>
  </div>
)
}
