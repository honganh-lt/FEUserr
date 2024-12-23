import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import { useNavigate } from 'react-router-dom'; // Dùng useNavigate để điều hướng
import '../style/ExamUsers.css';
import Headers from '../Header';

export default function ExamUsers() {
  const [examUsers, setExamUsers] = useState([]); // Cập nhật biến state đúng
  const [completedExams, setCompletedExams] = useState(new Set());
  const navigate = useNavigate(); // Hook điều hướng

  useEffect(() => {
    getAllUsers();
    const savedCompletedExams = JSON.parse(localStorage.getItem('completedExams')) || [];
    setCompletedExams(new Set(savedCompletedExams));
  }, []);

  const getAllUsers = async () => {
    const resp = await axiosLocalApi.get('/public/admin/exams');
    setExamUsers(resp.data); // Lưu danh sách bài thi vào state
  };

  const handleExamClick = (examId) => {
    setCompletedExams((prevCompletedExams) => {
      const newCompletedExams = new Set(prevCompletedExams);
      if (newCompletedExams.has(examId)) {
        newCompletedExams.delete(examId);
      } else {
        newCompletedExams.add(examId);
      }
      localStorage.setItem('completedExams', JSON.stringify([...newCompletedExams]));
      return newCompletedExams;
    });
  };

  // Duyệt qua examUsers để tạo ra các phần tử hiển thị
  const elementExamUsers = examUsers.map((item, index) => {
    const isCompleted = completedExams.has(item.examId); // Kiểm tra nếu bài thi đã hoàn thành
    return (
      <div
        key={index}
        className={`card ${isCompleted ? 'completed' : ''}`} // Điều chỉnh class card
        onClick={() => handleExamClick(item.examId)} // Xử lý sự kiện click vào bài thi
      >
        <div className='card-time'>
          <p>8/12/2024</p>
        </div>
        <div className="card-content">
          <h2>{item.title}</h2> {/* Hiển thị title bài thi */}
          <h3>{item.description}</h3> {/* Hiển thị description bài thi */}
          <div className="details">
            <span>Lần thi:</span>
            <a href='/reviewExam'>
              <span>Xem lại</span>
            </a>
          </div>
        </div>
        {/* Cập nhật đường dẫn tới trang làm bài */}
        <a onClick={() => navigate(`/taketheexam/${item.examId}`)}>
          <button className="card-button">Làm bài</button>
        </a>
      </div>
    );
  });

  return (
    <div>
      <Headers />
      <section className='container-section'>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm bài thi..." />
          <i className="fas fa-search" />
        </div>
      </section>

      <div className='category-exam'>
        <div className="container-exam">
          <div className="category-header">HÃY CHỌN BÀI THI!</div>
          {elementExamUsers} {/* Render danh sách bài thi */}
        </div>
      </div>
    </div>
  );
}
