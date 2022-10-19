import styled from 'styled-components';

export const AppointmentWrap = styled.div`
  .appointContainer {
    color: #292929;

    .appointHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 3rem;
      border-bottom: 0.063rem solid #a0a6ac;
      text-align: center;

      .title {
        margin-bottom: 0.938rem;

        .titleFont {
          font-size: 1.75rem;
          font-weight: 600;
        }
      }
    }

    .appointContents {
      max-width: 68.75rem;
      margin: 0 auto;
      border: 0.063rem solid #a0a6ac;
      border-radius: 0.313rem;

      display: flex;

      .calendarBox {
        width: 45%;

        .react-calendar {
          margin-left: 3rem;
          margin-top: 3rem;
          margin-bottom: 3rem;
          border-radius: 0.938rem;

          .react-calendar__navigation {
            display: flex;
            height: 2.75rem;
            margin-bottom: 1em;
          }

          .react-calendar__navigation button {
            min-width: 2.75rem;
            background: none;
            font-size: 1.15rem;
          }

          .react-calendar__month-view__weekdays {
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.938rem;
          }

          .react-calendar__tile {
            max-width: 100%;
            padding: 0.625rem 0.471rem;
            font-size: 0.938rem;
            text-align: center;
            border-radius: 0.25rem;
          }

          .react-calendar__tile--active:enabled:hover,
          .react-calendar__tile--active:enabled:focus {
            background: #85a2c3;
          }

          .react-calendar__tile--active {
            background: #85a2c3;
            color: white;
          }

          .duplicateDate {
            background-color: #cccccc;
            color: #a5a5a5;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" /></svg>');
          }

          .duplicateDate:hover {
            background: #85a2c3;
            color: white;
          }
        }
      }

      .appointBody {
        width: 55%;

        .appointBtn {
          width: 15.625rem;
          height: 12.5rem;
          margin-top: 3rem;
          margin-right: 3.125rem;
          text-align: center;
          display: inline-block;
          border: 0.063rem solid #a0a6ac;
          border-radius: 0.625rem;
          cursor: pointer;

          .appointBtnTitle {
            margin-top: 0.938rem;
            margin-bottom: 0.938rem;
            font-size: 1.25rem;
            font-weight: 600;
            display: block;
          }

          img {
            width: 3.125rem;
            margin-bottom: 0.938rem;
          }

          .appointBtnText {
            font-size: 1.063rem;
            display: block;
          }
        }

        .notice {
          margin-top: 2rem;
          padding-right: 2.9rem;
          font-size: 1.438rem;
          font-weight: 600;
          text-align: center;
          color: #616161;
        }
      }
    }
  }
`;
