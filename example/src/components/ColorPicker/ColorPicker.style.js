import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Block = styled.div`
  position: relative;
  padding: 4px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgb(221, 221, 221);
  display: inline-block;
  cursor: pointer;
`;

export const Color = styled.div`
  width: 40px;
  height: 16px;
  border-radius: 2px;
  background: ${({ value }) => value};
`;

export const Popover = styled.div`
  position: absolute;
  z-index: 50000;
`;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
