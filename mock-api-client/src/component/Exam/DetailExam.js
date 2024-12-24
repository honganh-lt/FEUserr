import React, { useState, useEffect } from 'react';
import '../Exam/DetailExam.css';
import Headers from '../../Header';

export default function DetailExam() {
  const [examData, setExamData] = useState(null); // To store exam data
  const [answers, setAnswers] = useState([]); // To store detailed answers

  useEffect(() => {
    const savedExamData = localStorage.getItem('examAnswers');
    if (savedExamData) {
      const parsedData = JSON.parse(savedExamData);
      setExamData(parsedData);
      setAnswers(parsedData.answers);
    }
  }, []);

  return (
    <>
    <Headers />
    <div className="exam-container">
      <h1></h1>

      {examData && (
        <>
          <div className="exam-info">
            {/* <h2>{examData.examId} - {examData.title}</h2> */}
            {/* <p>Thời gian làm bài: {examData.duration} phút</p> */}
          </div>

          <div className="answers-detail">
            {answers.map((answer, index) => (
              <div key={index} className="answer-card">
                <h3>{answer.questionText}</h3>
                <div className="options">
                  {answer.options?.map((option, optionIndex) => {
                    const isSelected = optionIndex === answer.selectedAnswerIndex;
                    const isCorrect = option.isCorrect;
                    return (
                      <div
                        key={option.optionId}
                        style={{
                          backgroundColor: isSelected ? 'lightblue' : 'transparent',
                          border: isCorrect ? '2px solid green' : '1px solid black',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          margin: '5px 0',
                        }}
                      >
                        {option.content} 
                        {/* {isSelected && <span> </span>} */}
                        {/* {isCorrect && !isSelected && <span> (Câu trả lời đúng)</span>} */}
                      </div>
                    );
                  })}
                </div>
                {/* <p><strong>Câu trả lời của bạn:</strong> {answer.selectedAnswer}</p> */}
                <p><strong>Câu trả lời đúng:</strong> {answer.correctAnswer}</p>
                <p><strong>Phương án đã chọn:</strong> {answer.isCorrect ? 'Đúng' : 'Sai'}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {!examData && <p>Đang tải dữ liệu bài thi...</p>}
    </div>
    </>
  );
}
