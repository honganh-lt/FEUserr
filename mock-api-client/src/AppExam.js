import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamUsers from './component/ExamUsers';
import Exam from './component/Exam/Exam';
import Result from './component/Exam/Result';
import ReviewExam from './component/Exam/ReviewExam';
import DetailExam from './component/Exam/DetailExam';
import ChooseExam from './component/ChooseExam';

function AppExam() {
  return (
    <Router>  {/* Đảm bảo <Router> bao bọc toàn bộ ứng dụng */}
      <Routes>
        <Route exact path="/chooseExams" element={<ChooseExam />} /> {/* Trang chọn đề */}
        <Route exact path="/exams/:subjectId" element={<ExamUsers />} /> {/* Danh sách bài thi */}
        <Route exact path="/taketheexam/:examId" element={<Exam />} /> {/* Làm bài thi */}
        <Route exact path="/result" element={<Result />} /> {/* Kết quả thi */}
        <Route exact path="/detail" element={<DetailExam />} /> {/* Xem chi tiết bài thi */}
        <Route exact path="/reviewExam" element={<ReviewExam />} /> {/* Xem lại bài thi */}
      </Routes>
    </Router>
  );
}

export default AppExam;
