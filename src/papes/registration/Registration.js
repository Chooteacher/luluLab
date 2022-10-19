import { RegistrationWrap } from './Registration.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Registration = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [useTimeArr, setUseTimeArr] = useState([]);
  const [registration, setRegistration] = useState({
    id: JSON.parse(localStorage.getItem('appointList')).length,
    name: '',
    ssn: '',
    phoneNum: '',
    appointmentDate: state.selectDate,
    appointmentTime: '',
    treatmentSubject: '',
  });

  const timeArr = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const information = e => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const goToAppointment = () => {
    if (registration.name == '') {
      alert('이름을 입력해주세요.');
    } else if (
      registration.ssn == '' ||
      registration.ssn.length != 13 ||
      registration.ssn.includes('-')
    ) {
      alert('주민번호를 확인해주세요.');
    } else if (
      registration.phoneNum == '' ||
      registration.phoneNum.includes('-')
    ) {
      alert('전화번호를 확인해주세요.');
    } else if (registration.appointmentTime == '') {
      alert('예약시간을 확인해주세요.');
    } else if (registration.treatmentSubject == '') {
      alert('진료과목을 확인해주세요.');
    } else {
      let arr = JSON.parse(localStorage.getItem('appointList'));
      arr.push(registration);
      localStorage.setItem('appointList', JSON.stringify(arr));
      alert('예약이 완료 되었습니다.');
      navigate('/');
    }
  };

  useEffect(() => {
    let timeArr = [];
    JSON.parse(localStorage.getItem('appointList')).map(item => {
      if (item.appointmentDate === state.selectDate) {
        timeArr.push(item.appointmentTime);
      }
    });
    setUseTimeArr(timeArr);
  }, []);

  const stopEvent = e => {
    e.preventDefault();
  };

  return (
    <RegistrationWrap>
      <div className="registrationContainer">
        <div className="registrationHeader">
          <div className="title">
            <span className="titleFont">예약 등록하기</span>
          </div>
        </div>
        <div className="registrationContents">
          <form onSubmit={stopEvent}>
            <div>
              <label htmlFor="name">이름</label>
              <input
                id="name"
                name="name"
                placeholder="실명을 입력해주세요"
                onChange={information}
              ></input>
            </div>
            <div>
              <label htmlFor="ssn">주민번호</label>
              <input
                id="ssn"
                name="ssn"
                placeholder="- 를 빼고 입력해주세요"
                onChange={information}
              ></input>
            </div>
            <div>
              <label htmlFor="phoneNum">전화번호</label>
              <input
                id="phoneNum"
                name="phoneNum"
                placeholder="- 를 빼고 입력해주세요"
                onChange={information}
              ></input>
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
              <label name="appointmentTime">예약시간</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                form="form"
                onChange={information}
              >
                <option>예약 가능한 시간</option>
                {timeArr.map(appointmentTime => {
                  if (!useTimeArr.includes(appointmentTime)) {
                    return (
                      <option key={appointmentTime} value={appointmentTime}>
                        {appointmentTime}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
            <div>
              <label htmlFor="treatmentSubject">진료과목</label>
              <input
                id="treatmentSubject"
                name="treatmentSubject"
                placeholder="ex) 신경외과, 일반외과, 피부과"
                onChange={information}
              ></input>
            </div>
            <button className="registrationBtn" onClick={goToAppointment}>
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
