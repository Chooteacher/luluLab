import { useEffect, useState } from 'react';
import { InquiryListWrap } from './InquiryList.styled';

const InquiryList = ({ setModalOpen, userInfo }) => {
  const [appointList, setAppointList] = useState(
    JSON.parse(localStorage.getItem('appointList'))
  );
  const [myAppointList, setMyAppointList] = useState([]);

  useEffect(() => {
    let userInfoArr = [];
    appointList.map(item => {
      if (item.name == userInfo.name && item.ssn == userInfo.ssn) {
        userInfoArr.push(item);
      }
    });
    setMyAppointList(userInfoArr);
  }, [appointList]);

  return (
    <InquiryListWrap>
      <div className="userInfoName">
        <span>{userInfo.name}님의 예약 정보입니다.</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>예약날짜</th>
            <th>예약시간</th>
            <th>진료과목</th>
          </tr>
        </thead>
        <tbody>
          {myAppointList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phoneNum}</td>
                <td>{item.appointmentDate}</td>
                <td>{item.appointmentTime}</td>
                <td>{item.treatmentSubject}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="notice">
        <span>예약은 1년까지 조회가 가능합니다.</span>
        <br></br>
        <span>기간이 지난 정보는 병원으로 문의해주세요.</span>
      </div>
      <div>
        <button className="listClose" onClick={() => setModalOpen(false)}>
          확인
        </button>
      </div>
    </InquiryListWrap>
  );
};

export default InquiryList;
