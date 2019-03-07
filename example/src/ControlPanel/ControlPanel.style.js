import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px 0px;
  width: 100%;

  h4 {
    font-weight: bold;
    color: rgb(102, 102, 102);
  }

  .blocks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .row {
      height: 40px;
      display: flex;
      align-items: center;
    }

    .settings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 75%;
      padding-left: 16px;

      .sliders {
        min-width: 30%;
      }

      .switchers {
        min-width: 30%;
      }

      .colors {
        min-width: 30%;
      }
    }

    .preview {
      width: 25%;
    }
  }
`;
