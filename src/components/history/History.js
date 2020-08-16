import React from 'react';
import HistoryItem from './HistoryItem';

export default function History( {transactions, delTransaction} ) {
    return (
        <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
                {transactions.length > 0 ? transactions.map( item => 
                    <HistoryItem 
                        transaction={item} 
                        key={item.id} 
                        delTransaction={delTransaction}
                    /> 
                ) : <h5>Ваша история пуста</h5>}
            </ul>
        </section>
    );
}