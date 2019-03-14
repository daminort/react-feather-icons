import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .label {
    width: 40%;
  }

  input {
    min-width: calc(60% - 52px);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;
    padding: 1px 4px;
    max-width: 80px;
    margin-right: 4px;
  }
`;
