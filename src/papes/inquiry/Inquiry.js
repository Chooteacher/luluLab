import { InquiryWrap } from './inquiry.style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import InquiryList from '../inquiry/components/InquiryList';

const Inquiry = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    ssn: '',
  });

  const goToAppointment = () => {
    navigate('/');
  };
  const information = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const inquiryBtn = () => {
    if (userInfo.name == '') {
      alert('이름을 입력해주세요.');
    } else if (
      userInfo.ssn == '' ||
      userInfo.ssn.length != 13 ||
      userInfo.ssn.includes('-')
    ) {
      alert('주민번호를 확인해주세요.');
    } else {
      setModalOpen(true);
    }
  };

  const stopEvent = e => {
    e.preventDefault();
  };

  return (
    <InquiryWrap>
      <div className="inquiryContainer">
        <div className="inquiryHeader">
          <div className="title">
            <span className="titleFont">예약 내역 조회</span>
          </div>
        </div>
        <div className="inquiryContents">
          <form onSubmit={stopEvent} action="/send">
            <div>
              <label htmlFor="name">예약자명</label>
              <input
                id="name"
                name="name"
                placeholder="실명을 입력해주세요"
                onChange={information}
                autoFocus
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
            <button className="goToAppointment" onClick={goToAppointment}>
              예약하기
            </button>
            <button className="inquiryBtn" onClick={inquiryBtn}>
              조회하기
            </button>
          </form>
          <Modal isOpen={modalOpen} style={modalStyle}>
            <InquiryList setModalOpen={setModalOpen} userInfo={userInfo} />
          </Modal>
        </div>
        <div className="notice">
          <span>진료 예약이 된 이름과 주민번호를 입력해주세요.</span>
        </div>
      </div>
    </InquiryWrap>
  );
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 10,
  },

  content: {
    maxwidth: '100%',
    width: '1200px',
    top: '40%',
    left: '50%',
    padding: '2.188rem',
    background: '#fafafa',
    display: 'flex',
    borderradius: '10px',
    justifyContent: 'center',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    boxshadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

Modal.setAppElement('#root');
export default Inquiry;
