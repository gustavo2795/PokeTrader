import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
  height: 430px;
  margin-top: 30px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
  border-radius: 15px;
  padding: 10px;
  border-style: outset;
  border-color: #275A9C;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 300px;
  height: 36px;
  border-style: outset;
  border-radius: 15px;
`

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`