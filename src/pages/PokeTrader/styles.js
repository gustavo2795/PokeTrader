import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
  background: #C2D5E4;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  background: #E64556;
  color: #fff;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 400px;
  height: 60px;
  padding: 8px;
  border-radius: 15px;
  border-style: outset;
  border-color: #275A9C;
  align-items: center;
  align-self: center;
`;

export const Footer = styled.div`
  display: flex;
  align-self: flex-end;
  background: #275A9C;
  width: 100%;
  height: 50px;
`;