// import React, { useEffect, useState } from 'react';
// import '../Exam/ReviewExam.css';
// import Headers from '../../Header';

// export default function ReviewExam() {
//     const [examDetails, setExamDetails] = useState(null); // Thông tin bài thi
//     const [examAnswers, setExamAnswers] = useState(null); // Câu trả lời đã lưu từ localStorage

//     useEffect(() => {
//         const queryParams = new URLSearchParams(window.location.search);
//         const examId = queryParams.get('examId'); // Lấy examId từ URL

//         if (examId) {
//             // Lấy chi tiết câu trả lời đã lưu từ localStorage
//             const savedAnswers = JSON.parse(localStorage.getItem('examAnswers')) || {};
//             if (savedAnswers.examId === examId) {
//                 setExamAnswers(savedAnswers.answers);
//             }
//         }
//     }, []);

//     return (
//         <>
//             <Headers />
//             <div className="category-review">
//                 <div className="review-card">
//                     <div className="review-text">
//                         <h1>KẾT QUẢ BÀI THI GẦN NHẤT!</h1>
//                         {/* Thông tin kết quả bài thi */}
//                         {/* Giả sử bạn có thể hiển thị thông tin về thời gian thi và điểm số */}
//                     </div>
//                 </div>

//                 <div className="category-review-qa">
//                     {examAnswers ? examAnswers.map((answer, index) => {
//                         return (
//                             <div className="question" key={index}>
//                                 <div className={`question-title ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
//                                     Câu {index + 1}: {answer.questionText}
//                                 </div>
//                                 <ul className="options">
//                                     <li>
//                                         <span className={`option-circle ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
//                                             {answer.selectedAnswer}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <span className="correct-answer">
//                                             Đáp án đúng: {answer.correctAnswer}
//                                         </span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         );
//                     }) : (
//                         <p>Đang tải kết quả...</p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }
