import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  .left {
    display: block;
    width: 70%;
    
    .top-bar {
      width: 100%;
      height: 100px;
    }

    .content {
      width: 100%;
      height: calc(100vh - 100px);
      overflow-y: scroll !important;
    }
  }

  .right {
    display: block;
    overflow-y: scroll !important;
    width: 30%;
    min-width: 360px;
    height: 100vh;
    padding: 0 4px;

    .preview {
      width: 100%;
    }

    .settings {
      width: 100%;
    }

    .code {
      width: 100%;
    }
  }
`;
