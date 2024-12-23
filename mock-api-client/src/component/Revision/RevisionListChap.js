import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../../api/local-api';
import { useParams } from 'react-router-dom';
import Headers from '../../Header';
import '../Revision/RevisionListChap.css';

export default function RevisionListChap() {
    const [subject, setSubject] = useState(null);
    const { subjectId } = useParams(); // Lấy subjectId từ URL

    const getSubjectById = async () => {
        try {
            const resp = await axiosLocalApi.get(`public/subjects/${subjectId}`);
            console.log('Dữ liệu môn học:', resp.data);
            setSubject(resp.data); // Lưu trữ môn học và các chương
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    useEffect(() => {
        getSubjectById();
    }, [subjectId]);

    if (!subject) {
        return <div>Đang tải dữ liệu...</div>;
    }

    const handleChapterDetails = (chapterId) => {
        console.log(`Xem chi tiết chương: ${chapterId}`);
        // Chuyển đến trang chi tiết chương nếu cần
    };

    const renderChaps = (chaps) => {
        return chaps.map((item) => (
            <div key={item.chapterId} className="chapter-card">
                <p className="chapter-title">{item.name}</p>
                <button 
                    className="chapter-details-btn"
                    onClick={() => handleChapterDetails(item.chapterId)}
                >
                    Chi tiết
                </button>
            </div>
        ));
    };

    return (
        <div>
            <Headers />
            <section className='category-re-list'>
                <h2>{subject.name}</h2>
                <div className="container-re-list">
                    <div className="chapters">
                        {renderChaps(subject.chapters)}
                    </div>
                </div>
            </section>
        </div>
    );
}
