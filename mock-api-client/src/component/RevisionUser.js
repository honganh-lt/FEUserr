import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api'; // Đảm bảo axios đã cấu hình đúng
import Headers from '../Header';
import { useNavigate } from 'react-router-dom';
import '../style/RevisionUser.css';

export default function RevisionUser() {
    const [subjects, setSubjects] = useState([]); // Lưu trữ dữ liệu môn học
    const navigate = useNavigate(); // Khởi tạo useNavigate

    // Loading lần đầu tiên
    useEffect(() => {
        getAllSubjects();
    }, []);

    // Hàm gọi API để lấy dữ liệu các môn học
    const getAllSubjects = async () => {
        try {
            const resp = await axiosLocalApi.get('subjects'); // Gọi API để lấy dữ liệu môn học
            console.log('Dữ liệu nhận được:', resp.data);
            setSubjects(resp.data); // Lưu trữ dữ liệu vào state
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    // Xử lý khi nhấn nút "Chọn chương"
    const handleSelectChapters = (subjectId) => {
        // Điều hướng tới trang có URL chứa subjectId
        navigate(`/listChap/${subjectId}`);
    };

    // Render các môn học
    const elementSubjects = subjects.map((item) => (
        <div className="card" key={item.subjectId}>
            <div className='card-time'>
                <p>8/12/2024</p>
            </div>
            <div className="card-content">
                <h3>{item.name}</h3> {/* Hiển thị tên môn học */}
            </div>
            <button 
                className="card-button"
                onClick={() => handleSelectChapters(item.subjectId)} // Chuyển đến trang các chương của môn học
            >
                Chọn chương
            </button>
        </div>
    ));

    return (
        <div>
            <Headers />

            <section className='container-section'>
                <div className="search-container">
                    <input type="text" placeholder="Tìm kiếm bài thi..." />
                    <i className="fas fa-search" />
                </div>
            </section>

            <section className='category-re'>
                <div className="container-re">
                    {elementSubjects}
                </div>
            </section>
        </div>
    );
}
