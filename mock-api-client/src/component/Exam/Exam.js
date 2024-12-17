import React, { useState, useEffect } from 'react';
import axiosLocalApi from '../../api/local-api';
import { useNavigate } from 'react-router-dom';
import '../Exam/Exam.css';
import Headers from '../../Header';

export default function Exam() {
  const [examQuestionAnswers, setexamQuestionAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 phút = 2400 giây
  const navigate = useNavigate(); // Dùng navigate để điều hướng

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1); // Giảm dần 1 giây
    }, 1000);
    return () => clearInterval(timerId); // Dọn dẹp khi component unmount
  }, [timeLeft]);

  // Lấy dữ liệu câu hỏi từ API
  const getAllUsers = async () => {
    try {
      const resp = await axiosLocalApi.get('examQuestionAnswers');
      console.log("dữ liệu", resp.data);
      
      setexamQuestionAnswers(resp.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  // Xử lý khi người dùng chọn câu trả lời
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    // Duyệt qua từng câu hỏi và kiểm tra câu trả lời của người dùng
    examQuestionAnswers.forEach((question, index) => {
      // Lấy câu trả lời người dùng đã chọn
      const userAnswerIndex = selectedAnswers[index];

      if (userAnswerIndex !== undefined) {
        // Kiểm tra nếu câu trả lời người dùng chọn có đúng hay không
        const selectedAnswer = question.answers[userAnswerIndex]; // Câu trả lời người dùng đã chọn
        if (selectedAnswer.isCorrect) {
          correctAnswers++; // Tăng số câu trả lời đúng nếu câu trả lời đúng
        }
      }
    });

    // Tính thời gian đã làm bài (40 phút - thời gian còn lại)
    const timeTaken = 40 * 60 - timeLeft; // Thời gian tính theo giây
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Điều hướng sang trang kết quả và truyền dữ liệu kết quả
    navigate('/result', {
      state: {
        correctAnswers,
        timeTaken: `${minutes}:${seconds.toString().padStart(2, '0')}`,
      },
    });
  };

  // Render các câu hỏi và lựa chọn câu trả lời
  const elementexamQuestionAnswers = examQuestionAnswers?.map((item, questionIndex) => {
    return (
      <div key={item.questionId} className="container-end">
        <div className="question">{item.content}</div>
        <div className="options">
          {item.answers?.map((answer, answerIndex) => {
          const isSelected = selectedAnswers[questionIndex] === answerIndex;
          return (
            <label key={answer.optionId} style={{ display: 'block', margin: '5px 0' }}>
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={answerIndex}
                checked={isSelected}
                onChange={() => handleAnswerSelect(questionIndex, answerIndex)}
                style={{
                  marginRight: '5px',
                  cursor: 'pointer',
                }}
              />
              <span
                style={{
                  backgroundColor: isSelected ? 'lightblue' : 'transparent',
                  padding: '5px 10px',
                  border: isSelected ? '2px solid blue' : '1px solid grey',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontWeight: 'bold',
                }}
              >
                {answer.content}
              </span>
            </label>
          );
        })}
        </div>
      </div>
    );
  });
  console.log('Dữ liệu in:', examQuestionAnswers);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60

  return (
    <>
      {/* <header className="header">
        <img
          alt="FITA logo"
          src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
          />
        <div>
          <div className="text-header">
            <h2>Trắc Nghiệm Online</h2>
          </div>
          <div className="nav-links">
            <a href="/">TRANG CHỦ</a>
            <a href="/revision">ÔN TẬP</a>
            <a href="/exams">BÀI THI</a>
          </div>
        </div>
        <div className="header-img">
          <img alt="" 
        src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
            
          />
        </div>
        <div className="auth-links">
          <a href="#">Đăng nhập</a>
        </div>
      </header> */}
      <Headers />

      <div className="category-center">
        <div className="table-left">
          <div className="info">
            <p><span>BÀI THI MÔN:</span> NGUYÊN LÝ HỆ ĐIỀU HÀNH</p>
            <p><span>ĐỀ THI:</span> 02</p>
            <p><span>SỐ CÂU:</span> 50</p>
            <p><span>THỜI GIAN:</span> 40 PHÚT</p>
          </div>
          <div className="timer">
            <h2>Thời gian còn lại</h2>
            <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
          </div>
        </div>
        <div className="table-right">
          <div className="answer-sheet">
            <p><span>BẢNG TRẢ LỜI</span></p>
            {[...Array(50)].map((_, idx) => (
              <div
                key={idx}
                className={`number ${selectedAnswers[idx] !== undefined ? 'selected' : ''}`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="category-end">
        {elementexamQuestionAnswers}
        <button className="submit-btn" onClick={handleSubmit}>Nộp bài</button>
      </div>
    </>
  );
}
