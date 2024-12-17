import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../../api/local-api'; // Đảm bảo axios đã cấu hình đúng
import { useParams } from 'react-router-dom'; // Để lấy subjectId từ URL
import Headers from '../../Header';
import '../Revision/RevisionListChap.css';

export default function RevisionListChap() {
    const [subject, setSubject] = useState(null); // Lưu trữ môn học và các chương của nó
    const { subjectId } = useParams(); // Lấy subjectId từ URL

    // Gọi API để lấy thông tin môn học và các chương của môn học
    const getSubjectById = async () => {
        try {
            const resp = await axiosLocalApi.get(`subjects/${subjectId}`); // Lấy thông tin môn học theo subjectId
            console.log('Dữ liệu môn học:', resp.data);
            setSubject(resp.data); // Lưu trữ dữ liệu vào state
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    // Gọi hàm getSubjectById khi component mount hoặc subjectId thay đổi
    useEffect(() => {
        getSubjectById();
    }, [subjectId]);

    // Kiểm tra nếu subject chưa có dữ liệu
    if (!subject) {
        return <div>Đang tải dữ liệu...</div>;
    }

    // Render các chương
    const renderChaps = (chaps) => {
        return chaps.map((item) => (
            <div key={item.chapterId}>
                <p>{item.name}</p>
                {/* Có thể thêm các thông tin hoặc link vào đây */}
            </div>
        ));
    };

    return (
        <div>
            <Headers />
            <div className="subject-detail">
                <h2>{subject.name}</h2>
                <div className="chapters">
                    {renderChaps(subject.chaps)} {/* Hiển thị các chương */}
                </div>
            </div>
        </div>
    );
}
