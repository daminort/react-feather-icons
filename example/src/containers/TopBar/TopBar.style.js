import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      min-width: 180px;
      font-weight: bold;
    }

    .links {
      margin-left: 16px;
      min-width: 240px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .bottom {
    color: rgba(0, 0, 0, .7);
    padding: 12px 0;
  }
`;
