// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
// import './AppRevision.css';

// import Revision from "./component/ChooseExam";
// // import RevisionContent from './component/RevisionContent';
// import RevisionUser from "./component/RevisionUser";
// import Headers from "./Header";
// import RevisionListChap from './component/Revision/RevisionListChap';
// import RevisionChap1 from './component/Revision/RevisionChap1';
// import RevisionSubject from './component/Revision/RevisionSubject';

// function AppRevision() {
//   return (
//     <Router> {/* Đảm bảo <Router> bao bọc toàn bộ ứng dụng */}
//     <Headers />
//       <div className="revision">
//           <Revision />
//           <div className='revision--content'>
//               <Routes>
//                   <Route exact path="/revision" element={<RevisionUser />} /> {/* Ôn Tập */}
//                   <Route exact path="/listChap/:subjectId" element={<RevisionListChap />} />        
//                   <Route exact path="/chap/:id" element={<RevisionChap1 />} /> {/* câu hỏi ôn tập theo chương */}
//                   <Route exact path="/revision/:subjectId" element={<RevisionSubject />} /> {/* Route cho môn học */}
//               </Routes>
//           </div>
//       </div>
//     </Router> 
//   );
// }

// export default AppRevision;
