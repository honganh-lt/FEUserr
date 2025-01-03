import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import { useNavigate } from 'react-router-dom'; // Dùng useNavigate để điều hướng
import '../style/ChooseExam.css';
import Headers from '../Header';

export default function ChooseExam() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null); // Môn học đã chọn
  const [exams, setExams] = useState([]); // Đề thi của môn học đã chọn
  const navigate = useNavigate(); // Hook điều hướng

  useEffect(() => {
    getAllSubjects();
  }, []);

  const getAllSubjects = async () => {
    try {
      const resp = await axiosLocalApi.get('/public/admin/exams');
      console.log('Dữ liệu nhận được:', resp.data);
      setSubjects(resp.data); // Lưu danh sách môn học
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  // Hàm chọn môn học và điều hướng đến trang bài thi
  const handleSelectSubject = (subjectId) => {
    // Điều hướng đến trang ExamUsers với subjectId
    navigate(`/exams/${subjectId}`); 
  };

  const elementSubjects = subjects.map((item) => (
    <div className="card" key={item.subjectId}>
      <div className='card-time'>
        <p>8/12/2024</p>
      </div>
      <div className="card-content">
        <h3>{item.description}</h3>
      </div>
      <button
        className="card-button"
        onClick={() => handleSelectSubject(item.examId)} // Chọn môn học
      >
        Chọn đề
      </button>
    </div>
  ));

  return (
    <div>
      <Headers />
      <div className="revision">
        <div className="sidebar">
          <h3>Danh sách môn học</h3>
          <ul>
            {subjects.map(subject => (
              <li key={subject.subjectId}>
                <button
                  onClick={() => handleSelectSubject(subject.subjectId)} // Chọn môn học
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                >
                  {subject.description}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          <section className='category-re'>
            <div className="container-re">
              {/* Hiển thị thông tin môn học đã chọn */}
              {selectedSubject ? (
                <div className="card">
                  <div className='card-time'>
                    <p>8/12/2024</p>
                  </div>
                  <div className="card-content">
                    <h2>{selectedSubject.name}</h2>
                    {/* Hiển thị danh sách đề thi */}
                    <ul>
                      {exams.length > 0 ? (
                        exams.map((exam, index) => (
                          <li key={index}>{exam.name}</li>
                        ))
                      ) : (
                        <p>Chưa có đề thi cho môn học này</p>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="subject-list">
                  {elementSubjects}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
