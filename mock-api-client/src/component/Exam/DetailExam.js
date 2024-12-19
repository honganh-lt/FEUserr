import React, { useEffect, useState } from 'react'
// import axiosMockApi from '../api/mock-api'
import '../Exam/DetailExam.css'
import Headers from '../../Header'

export default function DetailExam() {
    //call api ở đây

//     const [students,setStudents] = useState([]);

//     useEffect(() => {
//       getAllUsers();
//       console.log("Students Mock: ",students);
//   },[])

    //hàm call data from api
    // const getAllUsers = async() => {
    //     //gọi api để lấy dữ liệu
    //     const resp = await axiosMockApi.get("students");
    //     console.log("resp", resp.data);

    //     setStudents(resp.data)
    // }

    //render data to element
//     const elementStudents = students.map((item,index) => {
//       return (
//         <>
//         <div className='category-section'>
//             <div className="container-section">
//                 <div className="course-section">
//                     <a href="#">{item.revision}</a>
//                 </div>
//             </div>
//           </div>
//         </>
//       )
//   }
// )

return (
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
        <a href="/DetailExams">BÀI THI</a>
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

{/* Body-middle */}
{/* <div className="category-review">
    <div className="review-card">
        <div className="review-text">
            <h1>KẾT QUẢ BÀI THI GẦN NHẤT!</h1>
            <p>Ngày thi:</p>
            <p>Câu đúng: </p>
            <p>Thời gian: </p>
            <p>Điểm: </p>
        </div>
    </div>
</div> */}

{/* Body-middle */}
    {/* Body-middle */}
<div className="category-review-qa">
    <div className="question">
            <div className="question-title correct">
            Câu 1: Khi nào tiến trình chuyển từ trạng thái chạy sang trạng thái đợi?
            </div>
            <ul className="options">
            <li>
                <span className="option-circle">A</span>
                <label>Khi bị ngắt</label>
            </li>
            <li>
                <span className="option-circle">B</span>
                <label>Khi vào-ra hoặc một sự kiện nào đó kết thúc</label>
            </li>
            <li>
                <span className="option-circle">C</span>
                <label>Khi được trình lập lịch điều vận (giải quyết!)</label>
            </li>
            <li>
                <span className="option-circle correct">D</span>
                <label>Khi đợi vào-ra hoặc đợi một sự kiện nào đó xuất hiện</label>
            </li>
            </ul>
    </div>
    <div className="question">
        <div className="question-title incorrect">
        Câu 2: Xác định phương án đúng khi lựa chọn chia sẻ tài nguyên giữa tiến
        trình cha và con?
        </div>
        <ul className="options">
        <li>
            <span className="option-circle correct">A</span>
            <label>Tiến trình cha và con chia sẻ tất cả các tài nguyên</label>
        </li>
        <li>
            <span className="option-circle">B</span>
            <label>
            Tiến trình con được chia sẻ tập con tài nguyên của tiến trình cha
            </label>
        </li>
        <li>
            <span className="option-circle">C</span>
            <label>Tiến trình cha và con không có sự chia sẻ tài nguyên</label>
        </li>
        <li>
            <span className="option-circle incorrect">D</span>
            <label>Tất cả các phương án trên đều có thể xảy ra</label>
        </li>
        </ul>
    </div>
</div>



  {/* <div className='category-section'>
    {elementStudents}
</div> */}
    

</>
)
}
