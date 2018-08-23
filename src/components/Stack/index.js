import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card';

export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <Link className="link-home" to="/">
        <h4>Home</h4>
      </Link>
      <h3>{title}</h3>
      <br />
      <div className="stack-list">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stack: state.stack,
  };
};

export default connect(mapStateToProps)(Stack);
