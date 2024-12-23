import React, { useEffect, useState } from 'react';
import axiosLocalApi from '../api/local-api';
import Headers from '../Header';
import { useNavigate } from 'react-router-dom';
import '../style/RevisionUser.css';

export default function RevisionUser() {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null); // Store selected subject
    const navigate = useNavigate();

    useEffect(() => {
        getAllSubjects();
    }, []);

    const getAllSubjects = async () => {
        try {
            const resp = await axiosLocalApi.get('/public/subjects');
            console.log('Dữ liệu nhận được:', resp.data);
            setSubjects(resp.data);
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    const handleSelectSubject = (subjectId) => {
        const selected = subjects.find(subject => subject.subjectId === subjectId);
        setSelectedSubject(selected); // Update the selected subject
    };

    const elementSubjects = subjects.map((item) => (
        <div className="card" key={item.subjectId}>
            <div className='card-time'>
                <p>8/12/2024</p>
            </div>
            <div className="card-content">
                <h3>{item.name}</h3>
            </div>
            <button
                className="card-button"
                onClick={() => navigate(`/subject/${item.subjectId}`)} // Navigate to the selected subject
            >
                Chọn chương
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
                                    onClick={() => handleSelectSubject(subject.subjectId)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                                >
                                    {subject.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="content">
                    <section className='category-re'>
                        <div className="container-re">
                            {/* Display details of selected subject */}
                            {selectedSubject ? (
                                <div className="card">
                                    <div className='card-time'>
                                        <p>8/12/2024</p>
                                    </div>
                                    <div className="card-content">
                                        <h2>{selectedSubject.name}</h2>
                                    </div>
                                    <button
                                        className="card-button"
                                        onClick={() => navigate(`/subject/${selectedSubject.subjectId}`)} // Navigate to the selected subject
                                    >
                                        Chọn chương
                                    </button>
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
