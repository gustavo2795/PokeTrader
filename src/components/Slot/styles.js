import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 45px;
  padding: 5px;
  border-radius: 10px;
  border-style: outset;
  background: #fff;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: #D5D6D7;
  margin-right: 10px;
`;

export const Image = styled.img`
  background-size: cover;
  width: 30px;
  height: 30px;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #D5D6D7;
`;