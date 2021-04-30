import React, { Component } from "react";
import "./ExpenseItem.css";

export default class ExpenseItem extends Component {
  render() {
    const expense = this.props.expense;
    const date = {
      year: expense.date.toLocaleDateString("en-IN", { year: "numeric" }),
      month: expense.date.toLocaleDateString("en-IN", { month: "long" }),
      day: expense.date.toLocaleDateString("en-IN", { day: "numeric" }),
    };
    return (
      <div className="expense-item-component">
        <span className="expense-item-date">
          <div className="expense-item-date-month">{date.month}</div>
          <div className="expense-item-date-day">{date.day}</div>
          <div className="expense-item-date-year">{date.year}</div>
        </span>
        <span className="expense-item-type">{expense.type}</span>
        <span className="expense-item-amount">${expense.amount}</span>
      </div>
    );
  }
}
