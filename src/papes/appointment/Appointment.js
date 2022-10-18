import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentWrap } from './Appointment.styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Appointment = () => {
  const navigate = useNavigate();
  const [appointList, setAppointList] = useState([]);
  const [appointDateList, setAppointDateList] = useState([]);
  const [filterDateList, setFilterDateList] = useState([]);
  const [selectDate, setSelectDate] = useState('');

  const goToInquiry = () => {
    navigate('/inquiry');
  };

  const goToRegistration = () => {
    if (selectDate === '') {
      alert('날짜를 선택해 주세요.');
    } else {
      navigate('/registration', { state: { selectDate, appointList } });
    }
  };

  const countByElement = (arr, val) => {
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  };

  const convertDigitIn = str => {
    return str.split('-').reverse().join('-');
  };

  const getDate = (arr, newArr) => {
    arr.map(item => {
      newArr.push(item.appointmentDate);
    });
    return newArr;
  };

  const dateValidation = date => {
    if (date < moment()) {
      setSelectDate('');
      alert('선택 불가능 한 날짜입니다.');
    } else if (
      filterDateList.find(x => x === moment(date).format('DD-MM-YYYY'))
    ) {
      setSelectDate('');
      alert('예약이 다 찼습니다.');
    } else {
      setSelectDate(moment(date).format('YYYY-MM-DD'));
    }
  };

  useEffect(() => {
    fetch('data/Appointment.json')
      .then(res => res.json())
      .then(data => {
        setAppointList(data.appointment);
        setAppointDateList(getDate(data.appointment, []));
      });
  }, []);

  useEffect(() => {
    let filterDate = [];
    appointDateList.map(item => {
      if (countByElement(appointDateList, item) == 8) {
        filterDate.push(convertDigitIn(item));
      }

      setFilterDateList(() =>
        filterDate.filter((el, index) => filterDate.indexOf(el) === index)
      );
    });
  }, [appointList]);

  return (
    <AppointmentWrap>
      <div className="appointContainer">
        <div className="appointHeader">
          <div className="title">
            <span className="titleFont">온라인 예약</span>
          </div>
        </div>
        <div className="appointContents">
          <div className="calendarBox">
            <Calendar
              tileClassName={({ date }) => {
                if (
                  filterDateList.find(
                    x => x === moment(date).format('DD-MM-YYYY')
                  ) ||
                  date < moment()
                ) {
                  return 'duplicateDate';
                }
              }}
              onChange={dateValidation}
            />
          </div>
          <div className="appointBody">
            <div className="appointBtn" onClick={goToRegistration}>
              <span className="appointBtnTitle">진료예약</span>
              <img src="/images/document.png" />
              <span className="appointBtnText">
                원하시는 날짜를 선택 후
                <br />
                예약 해주세요.
              </span>
            </div>
            <div className="appointBtn">
              <span className="appointBtnTitle">예약조회</span>
              <img src="/images/telephone.png" />
              <span className="appointBtnText" onClick={goToInquiry}>
                예약된 내역을
                <br />
                확인하세요.
              </span>
            </div>
            <p className="notice">
              예약은 약속 입니다.
              <br />
              병원도 고객도 약속시간을 지키려는 노력이 중요합니다.
            </p>
          </div>
        </div>
      </div>
    </AppointmentWrap>
  );
};

export default Appointment;
