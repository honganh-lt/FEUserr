import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import { useParams, useNavigate } from 'react-router-dom'; 
import '../style/ExamUsers.css';
import Headers from '../Header';

export default function ExamUsers() {
  const [examUsers, setExamUsers] = useState([]); // Cập nhật biến state đúng
  const [completedExams, setCompletedExams] = useState(new Set());
  const [examAttempts, setExamAttempts] = useState({}); // Lưu số lần làm bài thi
  const { subjectId } = useParams(); // Lấy subjectId từ URL
  const navigate = useNavigate(); // Hook điều hướng

  useEffect(() => {
    if (subjectId) {
      getExamsBySubject(subjectId);
    }
    const savedCompletedExams = JSON.parse(localStorage.getItem('completedExams')) || [];
    setCompletedExams(new Set(savedCompletedExams));

    const savedExamAttempts = JSON.parse(localStorage.getItem('examAttempts')) || {};
    setExamAttempts(savedExamAttempts);
  }, [subjectId]);

  const getExamsBySubject = async (subjectId) => {
    try {
      const resp = await axiosLocalApi.get(`/public/admin/exams?subjectId=${subjectId}`);
      setExamUsers(resp.data); // Lưu danh sách bài thi vào state
    } catch (error) {
      console.error('Lỗi khi lấy bài thi:', error);
    }
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

    // Cập nhật số lần làm bài thi
    setExamAttempts((prevAttempts) => {
      const newAttempts = { ...prevAttempts };
      if (newAttempts[examId]) {
        newAttempts[examId] += 1;
      } else {
        newAttempts[examId] = 1;
      }
      localStorage.setItem('examAttempts', JSON.stringify(newAttempts));
      return newAttempts;
    });
  };

  const elementExamUsers = examUsers.map((item, index) => {
    const isCompleted = completedExams.has(item.examId); // Kiểm tra nếu bài thi đã hoàn thành
    const attempts = examAttempts[item.examId] || 0; // Lấy số lần làm bài thi (mặc định là 0)

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
            <span>Lần thi: {attempts}</span> {/* Hiển thị số lần thi */}
          </div>
        </div>
        <a onClick={() => navigate(`/taketheexam/${item.examId}`)}>
          <button className="card-button">Làm bài</button>
        </a>
      </div>
    );
  });

  return (
    <div>
      <Headers />
      <div className='category-exam'>
        <div className="container-exam">
          <div className="category-header">HÃY CHỌN BÀI THI!</div>
          {elementExamUsers} {/* Render danh sách bài thi */}
        </div>
      </div>
    </div>
  );
}
