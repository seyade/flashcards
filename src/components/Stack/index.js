import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card';
import styled from 'styled-components';

const StackListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`;

export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <Link className="link-home" to="/">
        <h4>Home</h4>
      </Link>
      <h3>{title}</h3>
      <br />
      <StackListContainer>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </StackListContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stack: state.stack,
  };
};

export default connect(mapStateToProps)(Stack);
