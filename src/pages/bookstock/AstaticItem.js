import React, { useState } from 'react';

function AstaticItem() {
    const [staticitem, setStaticitem] = useState([
        {   id: 4, 
            stockName: "AMZN",
            price:144.85 * 30,
            numbers:385,
            cost:144.85 * 30 * 385
        },
        {   id: 5, 
            stockName: "QQQ",
            price:374.21,
            numbers:1000,
            cost:374.21  * 30 * 1000
        },
        {   id: 6, 
            stockName: "AAPL",
            price:174.21,
            numbers:300,
            cost:174.21 * 30 * 300
            
        },
    ])

    const deleteById = id => {
        setStaticitem(oldValues => {
        return oldValues.filter(staticitem => staticitem.id !== id)
        })
    }
    return (
    <>
        {staticitem.map(staticitem => {
        return (
            <tr className="tr-list StaticItem">
                <td key={staticitem.id} className="td-stock-name">
                    {staticitem.stockName}
                </td> 
                <td className="px-6 py-4 text-right">
                    <span class="material-symbols-outlined sym-money">attach_money</span>
                    美金 {staticitem.price} 元

                </td>
                <td className="px-6 py-4 text-right">
                    {staticitem.numbers}
                </td>
                <td className="px-6 py-4  text-right">
                    <span class="material-symbols-outlined sym-money">attach_money</span>
                    台幣 {staticitem.cost} 元
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => deleteById(staticitem.id)}  className="remove td-btn-delete" >
                    刪除
                    </button>
                </td>

            </tr>
            )
        })}

    </>

    );
};

export default AstaticItem;
