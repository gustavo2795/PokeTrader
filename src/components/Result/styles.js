import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 300;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.isFair ? '#4D8B8F' : '#BA4A49'};
  color: #070808;
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