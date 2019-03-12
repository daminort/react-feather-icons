import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px 16px;

  .unordered {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .ordered {
    display: block;

    .group {
      display: block;
      margin-bottom: 16px;

      .icons {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }

  .box {
    position: relative;
    margin: 8px 4px 16px 4px;
    padding: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.25s linear;

    .title {
      display: none;
      position: absolute;
      left: 25%;
      right: 25%;
      bottom: -24px;
      justify-content: center;
      align-items: center;
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
        display: flex;
      }
    }

    &.active {
      border: 1px solid rgb(112, 189, 251);
      transform: scale(1.04);
      box-shadow: transparent 0px 0px 0px 2px;
      background-color: rgb(243, 249, 253);

      .title {
        display: flex;
      }
    }
  }
`;
