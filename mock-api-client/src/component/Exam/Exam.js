import React, { useState, useEffect } from 'react';
import axiosLocalApi from '../../api/local-api';
import { useNavigate, useParams } from 'react-router-dom'; // Sử dụng useParams để lấy examId từ URL
import '../Exam/Exam.css';
import Headers from '../../Header';

export default function Exam() {
  const [examData, setExamData] = useState(null); // Lưu thông tin bài thi
  const [examQuestionAnswers, setexamQuestionAnswers] = useState([]); // Lưu câu hỏi
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 phút = 2400 giây (thay đổi duration)
  const navigate = useNavigate(); // Dùng navigate để điều hướng
  const { examId } = useParams(); // Lấy examId từ URL

  useEffect(() => {
    if (examId) {
      getExamDetails(examId); // Gọi hàm lấy thông tin bài thi và câu hỏi khi examId có sẵn
    }
  }, [examId]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1); // Giảm dần 1 giây
    }, 1000);
    return () => clearInterval(timerId); // Dọn dẹp khi component unmount
  }, [timeLeft]);

  // Lấy thông tin bài thi và câu hỏi từ API dựa trên examId
  const getExamDetails = async (examId) => {
    try {
      const resp = await axiosLocalApi.get(`public/admin/exams/${examId}`);
      console.log("Dữ liệu bài thi:", resp.data);
      setExamData(resp.data); // Lưu thông tin bài thi
      setexamQuestionAnswers(resp.data.questions); // Lưu danh sách câu hỏi
      setTimeLeft(resp.data.duration * 60); // Cập nhật thời gian còn lại từ API
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu bài thi:', error);
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
      const userAnswerIndex = selectedAnswers[index];
      if (userAnswerIndex !== undefined) {
        const selectedAnswer = question.answers[userAnswerIndex];
        if (selectedAnswer.isCorrect) {
          correctAnswers++; // Tăng số câu trả lời đúng nếu câu trả lời đúng
        }
      }
    });

    // Tính thời gian đã làm bài (40 phút - thời gian còn lại)
    const timeTaken = 40 * 60 - timeLeft; // Thời gian làm bài tính theo 40 phút
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
  const elementexamQuestionAnswers = examQuestionAnswers.map((item, questionIndex) => {
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

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <a href="/exams" className="back-link">
        <span className="arrow-exam"><i className="fa-solid fa-arrow-left"></i></span>
      </a>
      <div className="category-center">
        <div className="table-left">
          {examData ? (
            <div className="info">
              <p> {examData.description}</p>
              <p>{examData.title}</p>
              <p>Số câu: {examQuestionAnswers.length}</p>
              <p>Thời gian:  {examData.duration} PHÚT</p>
            </div>
          ) : (
            <p>Đang tải thông tin bài thi...</p>
          )}
        </div>
        <div className="timer">
          <h2>Thời gian còn lại</h2>
          <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
        </div>
        <div className="table-right">
          <div className="answer-sheet">
            <p><span>BẢNG TRẢ LỜI</span></p>
            {[...Array(examQuestionAnswers.length)].map((_, idx) => (
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
        {elementexamQuestionAnswers} {/* Render các câu hỏi */}
        <button className="submit-btn" onClick={handleSubmit}>Nộp bài</button>
      </div>
    </>
  );
}
