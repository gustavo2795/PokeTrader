import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100px;
  max-height: 100%;
  padding: 10px;
  border-radius: 10px;
  border-style: outset;
  background: #fff;
  color: #070808;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  margin-top: -15px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  background-size: cover;
  width: 50px;
  height: 50px;
`;

export const TradeTitle = styled.h3`
  margin-right: 20px;
`;