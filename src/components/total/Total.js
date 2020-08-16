import React from 'react';

export default function Total( {resultIncome, resultExpenses, totalBalance} ) {
    return (
        <section className="total">
            <header className="total__header">
              <h3>Баланс</h3>
              <p className="total__balance">{totalBalance} грн</p>
            </header>
            <div className="total__main">
              <div className="total__main-item total__income">
                <h4>Доходы</h4>
                <p className="total__money total__money-income">
                  +{resultIncome} грн
                </p>
              </div>
              <div className="total__main-item total__expenses">
                <h4>Расходы</h4>
                <p className="total__money total__money-expenses">
                  -{resultExpenses} грн
                </p>
              </div>
            </div>
        </section>
    );
}
