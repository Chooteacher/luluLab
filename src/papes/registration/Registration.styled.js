import styled from 'styled-components';

export const RegistrationWrap = styled.div`
  .registrationContainer {
    color: #292929;

    .registrationHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 3rem;
      text-align: center;
      border-bottom: 0.063rem solid #a0a6ac;

      .title {
        margin-bottom: 0.938rem;

        .titleFont {
          font-size: 1.75rem;
          font-weight: 600;
        }
      }
    }

    .registrationContents {
      max-width: 30rem;
      margin: 0 auto;
      border: 0.063rem solid #a0a6ac;
      border-radius: 0.313rem;

      form {
        margin: 1.875rem 2.5rem;
        text-align: center;

        div {
          margin-bottom: 0.813rem;
          display: flex;
          justify-content: space-around;

          label {
            width: 30%;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
          }

          input {
            width: 70%;
            font-size: 1.125rem;
          }

          input:focus {
            outline: 0.188rem solid #f5f5f5;
          }

          input::placeholder {
            color: #a3a3a3;
            padding-left: 0.438rem;
          }

          .appointDate {
            color: #a3a3a3;
          }

          select {
            width: 70%;
            font-size: 1.125rem;
            border-color: #a0a6ac;
            color: #a3a3a3;
          }
        }

        .timeSelecter {
          display: flex;
          justify-content: flex-start;
        }
      }

      .registrationBtn {
        width: 6.25rem;
        height: 2.5rem;
        margin-top: 0.938rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 0.625rem;
        background-color: #e1e9f2;
        cursor: pointer;
      }

      .registrationBtn:hover {
        border: 1px solid #85a2c3;
      }
    }

    .notice {
      max-width: 68.75rem;
      margin: 0 auto;
      padding-top: 3rem;

      span {
        font-size: 1rem;
        font-weight: 600;
        color: #616161;
      }
    }
  }
`;
