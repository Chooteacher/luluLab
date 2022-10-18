import styled from 'styled-components';

export const InquiryListWrap = styled.div`
  margin-top: 0.938rem;
  text-align: center;
  color: #292929;

  table {
    width: 62.5rem;

    tr {
      height: 3.125rem;
      border: 0.063rem solid #a0a6ac;
      font-size: 1.125rem;
    }
  }

  .listClose {
    width: 6.25rem;
    height: 2.5rem;
    margin-top: 1.875rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.625rem;
    background-color: #e1e9f2;
    cursor: pointer;
  }

  .listClose:hover {
    border: 1px solid #85a2c3;
  }
`;
