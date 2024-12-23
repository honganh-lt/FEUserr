import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import CreateUser from './component/Creatser';
// import LocalUsers from './component/LocalUsers';
// import MockUsers from './component/MockUsers';
// import RevisionUser from './component/RevisionUser';
import ExamUsers from './component/ExamUsers';
// import RevisionList from './component/Revision/RevisionListChap';
// import RevisionListChap from './component/Revision/RevisionListChap';
// import RevisionChap1 from './component/Revision/RevisionChap1';
import Exam from './component/Exam/Exam';
import Result from './component/Exam/Result';
import ReviewExam from './component/Exam/ReviewExam';
// import RevisionListChapExam from './component/Revision/RevisionListChapExam';
import AppRevision from './AppRevision';
import AppExam from './AppExam';
import RevisionUser from './component/RevisionUser';
import RevisionListChap from './component/Revision/RevisionListChap';
import RevisionChap1 from './component/Revision/RevisionChap1';
import Home from './component/Home';

function App() {
  return (
    <div>
    <Router>  {/* Đảm bảo <Router> bao bọc toàn bộ ứng dụng */}
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Trang Chủ */}
        <Route exact path="/revision" element={<RevisionUser />} /> {/* Ôn Tập */}
        {/* Thêm route mới cho việc hiển thị thông tin chi tiết môn học */}
        {/* <Route exact path="/subject/:subjectId" element={<RevisionUser />} /> Ôn Tập */}

        <Route exact path="/subject/:subjectId" element={<RevisionListChap />} />        
        <Route exact path="/chap/:id" element={<RevisionChap1 />} /> {/* câu hỏi ôn tập theo chương */}
        {/* <Route exact path="/revision/:subjectId" element={<RevisionSubject />} /> Route cho môn học */}
      </Routes>
    </Router>
      {/* <AppRevision /> */}
      <AppExam />
      </div>
  );
}

export default App;
