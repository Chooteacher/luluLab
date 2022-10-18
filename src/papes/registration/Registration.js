import { RegistrationWrap } from './Registration.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [ssn, setSsn] = useState('');
  const [phoneNum, sePhoneNum] = useState('');
  const [treatmentSubject, setTreatmentSubject] = useState('');

  const { state } = useLocation();

  const GoToAppointment = () => {
    navigate('/');
  };

  // const userNameHandler = (e) => {

  // }

  // 주민번호 13자
  // 진료과목 2자 이상
  // 이름 2자 이상
  // 전화번호 11자

  return (
    <RegistrationWrap>
      <div className="registrationContainer">
        <div className="registrationHeader">
          <div className="title">
            <span className="titleFont">예약 등록하기</span>
          </div>
        </div>
        <div className="registrationContents">
          <form>
            <div>
              <label htmlFor="name">이름</label>
              <input id="name" placeholder="실명을 입력해주세요"></input>
            </div>
            <div>
              <label htmlFor="ssn">주민번호</label>
              <input id="ssn" placeholder="- 를 빼고 입력해주세요"></input>
            </div>
            <div>
              <label htmlFor="phoneNum">전화번호</label>
              <input id="phoneNum" placeholder="- 를 빼고 입력해주세요"></input>
            </div>
            <div>
              <label>예약날짜</label>
              <input
                className="appointDate"
                defaultValue={state.selectDate}
                disabled
              ></input>
            </div>
            <div className="timeSelecter">
              <label name="time">예약시간</label>
              <select name="time" form="form">
                <option>시간넣으쇼</option>
              </select>
            </div>
            <div>
              <label htmlFor="treatmentSubject">진료과목</label>
              <input
                id="treatmentSubject"
                placeholder="ex) 신경외과, 일반외과, 피부과"
              ></input>
            </div>
            <button className="registrationBtn" onClick={GoToAppointment}>
              진료 예약
            </button>
          </form>
        </div>
        <div className="notice">
          <span>1. 상담시간: 평일 09:00 - 17:00 (일요일 및 공휴일 제외)</span>
          <br />
          <span>
            2. 1577-0106 번호로 상담 전화가 수신되며 연결 2회 이상 실패 시 예약
            의뢰가 자동 취소됩니다.
          </span>
          <br />
          <span>
            3. 예약변경 또는 취소를 원하실 경우 진료 3시간 전까지 가능 합니다.
          </span>
          <br />
          <span>
            4. 예약취소 없이 진료에 오지 않은 횟수가 2회를 경과하면 1년간
            인터넷예약 사용이 제한됩니다. (전화예약만 가능)
          </span>
        </div>
      </div>
    </RegistrationWrap>
  );
};

export default Registration;
