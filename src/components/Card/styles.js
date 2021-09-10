import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  padding: 5px;
  border-radius: 10px;
  border-style: outset;
  background: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background: #fff;
`;

export const Image = styled.img`
  background-size: cover;
  width: 70px;
  height: 70px;
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