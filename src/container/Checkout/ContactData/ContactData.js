import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import './ContactData.css';

class ContactData extends Component {
  render() {
    return (
      <div className="ContactData">
        <h4>Enter you Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
