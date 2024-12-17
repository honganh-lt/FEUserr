// import React, { useEffect, useState } from 'react';
// import axiosLocalApi from '../../api/local-api';
// // import '../Revision/RevisionListChapExam.css';

// export default function RevisionListChapExam() {
//   const [currentDate, setCurrentDate] = useState('');
//   const [listChapExam, setListChapExam] = useState([]);

//   // Lấy ngày tháng năm hiện tại khi component được load
//   useEffect(() => {
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString('vi-VN'); // Định dạng ngày theo kiểu Việt Nam
//     setCurrentDate(formattedDate);
//   }, []);

//   // Hàm gọi API để lấy danh sách các chương
//   useEffect(() => {
//     getAllChap();
//   }, []);

//   const getAllChap = async () => {
//     try {
//       const response = await axiosLocalApi.get("listChapExam");
//       console.log("Danh sách chương: ", response.data);
//       setListChapExam(response.data);
//     } catch (error) {
//       console.error("Lỗi khi gọi API danh sách chương: ", error);
//     }
//   };

//   // Render các chương với thông tin ngày tháng
//   const elementListChapExam = listChapExam.map((item, index) => {
//     return (
//       // <div className='category-list' key={item.id}>
//       //   <div className="container-list">
//       //     <div className="course-list">
//       //       {/* Sửa lại href để dẫn đến đường link đúng */}
//       //       <a href={`/chap/${item.id}`}>{item.chap}</a>
//       //       <p>{currentDate}</p>
//       //     </div>
//       //   </div>
//       // </div>

//       <div className="category-section mb-4" key={index}>
//       <div className="container">
//         <div className="row d-flex justify-content-center align-items-center">
//           {/* <!-- Phần ô chứa ảnh và nội dung --> */}
//           <div className="card-container">
//             {/* <!-- Phần ảnh --> */}
//             <div className="img-container">
//               <img 
//                 src="http://minhhai.devmaster.vn/LayoutUser/images/topics/undraw_Remote_design_team_re_urdx.png" 
//                 alt="Course Image" 
//                 class="img-fluid course-image rounded" 
//               />
//             </div>
    
//             {/* <!-- Phần nội dung --> */}
//             <div className="course-details">
//             <a href={`/chap/${item.id}`} className="course-link d-block mb-2">{item.chapExam}</a>
//             <a href={`/chap/${item.id}`}><button className="btn btn-primary select-chapter-button">Chi tiết</button></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
//   });

//   return (
//     <div>
//       <header className="header">
//         <img 
//           alt="FITA logo"
//           src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
//         />
//         <div>
//           <div className='text-header'>
//             <h2>Trắc Nghiệm Online</h2>
//           </div>
//           <div className="nav-links">
//             <a href="/">TRANG CHỦ</a>
//             <a href="/revision">ÔN TẬP</a>
//             <a href="/exams">BÀI THI</a>
//           </div>
//         </div>
//         <div className='header-img'>
//           <img
//             alt=""
//             src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
//           />
//         </div>
//         <div className="auth-links">
//           <a href="#">Đăng nhập</a>
//         </div>
//       </header>

//       <section className='container-section-search'>
//     <div className="search-container">
//         <input type="text" placeholder="Tìm kiếm chương..." />
//         <i className="fas fa-search" />
//     </div>
//   </section>

//       <section className='container-section'>
//         <div>
//           <a href="/listChap/:id" className="link-with-icon">
//             <i className="fa-solid fa-arrow-left"></i>
//           </a>
//         </div>

//         {/* Hiển thị danh sách các chương */}
//         <div className='category-re'>
//           {elementListChapExam}
//         </div>
//       </section>
//     </div>
//   );
// }
