import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

import './ContactData.css';

class ContactData extends Component {
  state = {
    ingredients: null,
    price: null,
    customer: {
      name: '',
      address: {
        street: '',
        zipcode: '',
        country: ''
      },
      email: ''
    },
    deliveryMethod: 'fastest',
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Nikhil Shrestha',
        address: {
          street: 'test street 1',
          zipcode: '4321',
          country: 'Nepal'
        },
        email: 'nikhil@gmail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input type="text" name="name" placeholder="Your name" />
        <Input type="email" name="email" placeholder="Your Email" />
        <Input type="text" name="street" placeholder="Street" />
        <Input type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter you Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
