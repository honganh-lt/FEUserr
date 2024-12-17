import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../../api/local-api'; // Giả sử bạn đã cấu hình axios đúng
import { useParams } from 'react-router-dom'; // Để lấy params từ URL
import '../Revision/RevisionChap1.css'

export default function RevisionChap1() {
  const { id } = useParams(); // Lấy id chương từ URL (ví dụ /chap/2 sẽ lấy id = 2)
  
  const [questionAnswers, setQuestionAnswers] = useState([]);
  
  useEffect(() => {
    getAllQuestions(); // gọi hàm lấy dữ liệu từ API khi component mount
  }, [id]); // Khi id thay đổi (chuyển sang chương khác), gọi lại API

  const getAllQuestions = async () => {
    try {
      // Gọi API để lấy câu hỏi từ tất cả các chương
      const response = await axiosLocalApi.get("questionAnswers");
      console.log("Dữ liệu câu hỏi:", response.data);

      // Lọc câu hỏi dựa trên id của chương
      const filteredQuestions = response.data.filter(item => item.id === id);
      setQuestionAnswers(filteredQuestions);  // Cập nhật state với dữ liệu của chương hiện tại
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu câu hỏi:", error);
    }
  };

  // Render câu hỏi và đáp án
  const renderQuestions = questionAnswers.map((item) => (
    <div key={item.id} className='category-list-chap'>
      <div className="container-list-chap">
        <div className="course-list-chap">
          <h3>{item.question}</h3>
          <ul>
            {item.answers.map((answer, index) => (
              <li key={index} style={{ color: answer.is_correct ? 'red' : 'black' }}>
                <label>
                  <input 
                    type="radio" 
                    name={`question-${item.id}`} 
                    value={answer.answer_text} 
                    disabled
                  />
                  {answer.answer_text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));
  

  return (
    <div>
      <header className="header">
        <img 
          alt="FITA logo"
          src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
        />
        <div>
          <div className='text-header'>
            <h2>Trắc Nghiệm Online</h2>
          </div>
          <div className="nav-links">
            <a href="/">TRANG CHỦ</a>
            <a href="/revision">ÔN TẬP</a>
            <a href="/exams">BÀI THI</a>
          </div>
        </div>
        <div className='header-img'>
          <img alt="" src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
          />
        </div>
        <div className="auth-links">
          <a href="#">Đăng nhập</a>
        </div>
      </header>


      <div>
        <a href="/listChap/:id" className="link-with-icon">
          <i className="fa-solid fa-arrow-left"></i>  
        </a>
      </div>
      
      <div className='category-list-chap'>
        {renderQuestions}
      </div>
    </div>
  );
}
