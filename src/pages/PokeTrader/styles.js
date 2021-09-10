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
  flex-direction: row;
  width: 400px;
  height: 60px;
  padding: 8px;
  border-radius: 15px;
  border-style: outset;
  border-color: #275A9C;
  align-items: center;
  align-self: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 300px;
  height: 40px;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
  background: ${props => props.isFair ? '#4D8B8F' : '#BA4A49'};
  color: #070808;
`;

export const Button = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  background: #3378BC;
  color: #fff;
  border-radius: 15px;
  margin-top: 20px;
`;