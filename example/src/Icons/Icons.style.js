import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  .box {
    position: relative;
    margin: 8px 16px 16px 16px;
    padding: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.3s linear;

    .title {
      display: none;
    }

    .icon {
      min-width: 24px;
      min-height: 24px;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      border: 1px solid #ccc;

      .title {
        position: absolute;
        left: 25%;
        right: 25%;
        bottom: -24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
