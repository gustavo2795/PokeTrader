import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Container, Title, TradeTitle, Image } from './styles';

const History = ({trades}) => {
  console.log(trades);
  return (
    <Container>
      <Title>
        <h4>Trade History</h4>
      </Title>
      <List>
        {trades && trades.map((item, index) => (
          <ListItem key={index} style={{ background: `${item.isFair ? '#4D8B8F' : '#BA4A49'}`}}>
            <TradeTitle>Trade {index + 1}</TradeTitle>
            {'   '}
            <p>P1: </p>
            {item.player1.map((item, index) => (
              <Image src={item.img} key={index} />
            ))}
            <p>P2: </p>
            {item.player2.map((item, index) => (
              <Image src={item.img} key={index} />
            ))}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default History;
