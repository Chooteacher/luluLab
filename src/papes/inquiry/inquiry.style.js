import styled from 'styled-components';

export const InquiryWrap = styled.div`
  .inquiryContainer {
    color: #292929;

    .inquiryHeader {
      max-width: 68.75rem;
      margin: 0 auto;
      margin-top: 0.938rem;
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

    .inquiryContents {
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
        }
      }

      .inquiryBtn {
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

      .inquiryBtn:hover {
        border: 1px solid #85a2c3;
      }
    }

    .notice {
      max-width: 68.75rem;
      margin: 0 auto;
      text-align: center;
      padding-top: 3rem;

      span {
        font-size: 1rem;
        font-weight: 600;
        color: #616161;
      }
    }
  }
`;
