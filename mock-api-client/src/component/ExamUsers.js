import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import '../style/ExamUsers.css';
import Headers from '../Header';

export default function ExamUsers() {
    // Lưu trữ danh sách người dùng thi
    const [examUsers, setExamUsers] = useState([]);
    
    // Lưu trữ các bài thi đã làm xong
    const [completedExams, setCompletedExams] = useState(new Set());

    useEffect(() => {
        getAllUsers();
        // Tải trạng thái bài thi đã làm từ localStorage khi trang tải lại
        const savedCompletedExams = JSON.parse(localStorage.getItem('completedExams')) || [];
        setCompletedExams(new Set(savedCompletedExams));
    }, []);

    // Hàm call API để lấy danh sách bài thi
    const getAllUsers = async () => {
        const resp = await axiosLocalApi.get('examUsers');
        setExamUsers(resp.data);
    };

    // Hàm để đánh dấu bài thi đã làm xong
    const handleExamClick = (examId) => {
        // Cập nhật trạng thái completedExams
        setCompletedExams(prevCompletedExams => {
            const newCompletedExams = new Set(prevCompletedExams);
            if (newCompletedExams.has(examId)) {
                newCompletedExams.delete(examId); // Nếu đã chọn, bỏ chọn (hoặc có thể không cần chức năng này)
            } else {
                newCompletedExams.add(examId); // Nếu chưa chọn, thêm vào
            }
            // Lưu vào localStorage
            localStorage.setItem('completedExams', JSON.stringify([...newCompletedExams]));
            return newCompletedExams;
        });
    };

    // Render danh sách các bài thi
    const elementExamUsers = examUsers.map((item, index) => {
        const isCompleted = completedExams.has(item.id); // Kiểm tra xem bài thi đã làm chưa
        return (
            <div
                key={index}
                className={`card ${isCompleted ? 'completed' : ''}`} // Thêm lớp 'completed' nếu bài thi đã làm xong
                onClick={() => handleExamClick(item.id)} // Bắt sự kiện click
            >
                <div className='card-time'>
                    <p>8/12/2024</p>
                </div>
                <div className="card-content">
                    <h3>{item.exam}</h3>
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
                    {elementExamUsers}
                </div>
            </div>
        </div>
    );
}
