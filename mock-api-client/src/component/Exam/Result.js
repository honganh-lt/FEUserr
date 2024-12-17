import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Exam/Result.css';
import Headers from '../../Header';

export default function Result() {
  const location = useLocation();
  const { correctAnswers, timeTaken, score } = location.state || {}; // Lấy dữ liệu từ navigation

  return (
    <>
      {/* <header className="header">
        <img
          alt="FITA logo"
          src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
          />
        <div>
          <div className="text-header">
            <h2>Trắc Nghiệm Online</h2>
          </div>
          <div className="nav-links">
            <a href="/">TRANG CHỦ</a>
            <a href="/revision">ÔN TẬP</a>
            <a href="/Results">BÀI THI</a>
          </div>
        </div>
        <div className="header-img">
          <img alt=""
        src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFsE0dZRRTqIsr0-jOrDGSddRW8UDufYn0UhbapJeRrGgqfakajBrq6F4PkTX7thQnzsPJuyUERI~G4FjU~XhPngaao4fjGnbd47uujKsZrQELuNZHzvblhDTklkfkr2D3bgkd84AejoWi1yP3xtBj~P7AiQL83UstqIBISpXosea-l8tj-i~zWpqypXVSnITIBFlDSn~4kVFWiEaCJyo2jaegk7SZwO30Rhk~iTQGWv9jDK21NCFJ4GJc7aGubJ7Ee76qo1wOhzeFNP2roGP2~dmBMSKCLZzBt9ucidsFnZ3jp1Lbvnr2jmtAR9Cd8nnyLGqcwxh6RtvYJGp~oQhw__"
            
           />
        </div>
        <div className="auth-links">
          <a href="#">Đăng nhập</a>
        </div>
      </header> */}
      <Headers />

      <div className="category-result">
        <div className="result-card">
          <div className="result-img">
            <img
              alt="Một chiếc đèn bàn chiếu sáng một chồng sách"
              src="https://s3-alpha-sig.figma.com/img/e41f/cba9/a860f347fa09b516f9bebebcb8fcf1a3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G129i8jft2QCgEP99rtNevZqQd10cYsgvKQ6tjDf-Qb1Tu0u5~lwugUAtwh0g1P4oMKgnycDT8Il4B7h3pGpSZrIIWGUw4JCp2ov8-fPvxVoT-2MR1BN6rLnSlpAI3EpKgCB2SCBfr3vbcdTz4z3vqL2FIzpF4MumIglMfyUV6Y-BiCIxbtMzy7vsfrP5kqBJRFTXICkwtd3jcoizShLdJrL4an80z2C88MesxZ3q07rnsHi4B8inD2wJJ-t0hWHCjQAOSu8E-FoHM5lq2qG6Ie8oRxnawCRCGr5v-HsVGikjeDlJnuZJAfERdphxaURTOFJ5AXOHMhbuHm33-hbnA__"
            />
          </div>
          <div className="result-text">
            <h1>KẾT QUẢ BÀI THI!</h1>
            <p>CÂU ĐÚNG: {correctAnswers}/50</p>
            <p>THỜI GIAN: {timeTaken}</p>
            <p>ĐIỂM: {score}</p>
            <div className="btn-result">
              <a href="/exams">
                <button className="submit-btn">THOÁT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
