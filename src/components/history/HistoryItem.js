import React from 'react';

export default function HistoryItem( {transaction, delTransaction} ) {
    return (
        <li className={`history__item history__item-${transaction.add ? 'plus' : 'minus'}`}>
            {transaction.description}
            <span className="history__money">{transaction.add ? '+' : '-'}{transaction.amount} грн</span>
            <button className="history__delete" onClick={() => delTransaction(transaction.id)}>x</button>
        </li>
    );
}