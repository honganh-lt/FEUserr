import React, { useEffect, useState } from 'react'
import axiosLocalApi from '../api/local-api'
import '../style/ExamUsers.css'
import Headers from '../Header';

export default function ExamUsers() {
    //call api ở đây

    const [examUsers,setexamUsers] = useState([]);

    useEffect(() => {
      getAllUsers();
      console.log("examUsers Mock: ",examUsers);
  },[])

    //hàm call data from api
    const getAllUsers = async() => {
        //gọi api để lấy dữ liệu
        const resp = await axiosLocalApi.get("examUsers");
        console.log("resp", resp.data);

        setexamUsers(resp.data)
    }

    //render data to element
    const elementexamUsers = examUsers.map((item,index) => {
      return (
        <>
        <div className="card">
            <div className='card-time'>
                <p>8/12/2024</p>
            </div>
            <div className="card-content">
              <h3>
              {item.exam}
              </h3>
              <div className="details">
                <span>Lần thi:</span>
                <a href='/reviewExam'>
                  <span>Xem lại</span>
                </a>
              </div>
            </div>
            <a href="/taketheexam">
                <button className="card-button">Làm bài</button>
            </a>
          </div>
        </>
      )
  }
)

return (
  <div>
    <>
    {/* Header */}
    {/* <header className="header">
    <img 
      alt="FITA logo"
      src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
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
        <a href="/exams">BÀI THI</a>
      </div>
    </div>
    <div className='header-img'>
      <img
        alt=""
        src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
      />
    </div>
    <div className="auth-links">
      <a href="#">Đăng nhập</a>
    </div>
  </header> */}
  <Headers />

{/* Body */}
  <section className='container-section'>
    <div className="search-container">
        <input type="text" placeholder="Tìm kiếm bài thi..." />
        <i className="fas fa-search" />
    </div>
  </section>
  
  {/* <div className='category-section'>
    {elementexamUsers}
</div> */}
    <div className='category-exam'>
        <div className="container-exam">
        <div className="category-header">HÃY CHỌN BÀI THI!</div>
            {elementexamUsers}
      </div>
    </div>

</>
  </div>
)
}
