// import './AppExam.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ExamUsers from './component/ExamUsers';
import Exam from './component/Exam/Exam';
import Result from './component/Exam/Result';
import ReviewExam from './component/Exam/ReviewExam';
import DetailExam from './component/Exam/DetailExam';

function AppExam() {
  return (
    <Router>  {/* Đảm bảo <Router> bao bọc toàn bộ ứng dụng */}
      <Routes>
        <Route exact path="/exams" element={<ExamUsers />} />                 {/* Bài Thi */}
        <Route exact path="/taketheexam" element={<Exam />} />                {/* Làm bài thi */}
        <Route exact path="/result" element={<Result />} />                   {/* Kết quả thi */}
        <Route exact path="/detail" element={<DetailExam />} />                   {/* Xem chi tiết bài vừa thi */}
        <Route exact path="/reviewExam" element={<ReviewExam />} />                   {/* Xem lại bài thi gần nhất ấn bài thi */}

      </Routes>
    </Router>
  );
}

export default AppExam;
