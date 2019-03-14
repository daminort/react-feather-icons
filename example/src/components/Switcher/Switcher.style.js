import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .label {
    width: 40%;
  }

  .buttons {
    display: flex;
    width: 60%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    border-radius: 4px;
    overflow: hidden;
    background: rgb(255, 255, 255);

    button {
      border-top-style: initial;
      border-bottom-style: initial;
      border-top-color: initial;
      border-bottom-color: initial;
      color: rgb(136, 136, 136);
      border-image: initial;
      background: transparent;
      padding: 6px 20px;
      outline: none;
      flex: 1 1 0%;
      cursor: pointer;
      max-height: 29px;

      &.active {
        color: rgb(1, 148, 221);
        background-color: rgb(243, 249, 253);
      }

      &.button-0,
      &.button-1 {
        border-left-style: initial;
        border-left-color: initial;
        border-width: 0px 1px 0px 0px;
        border-right: 1px solid rgb(221, 221, 221);
      }

      &.button-2 {
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
      }
    }
  }
`;
