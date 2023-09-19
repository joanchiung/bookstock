import React, { useState } from 'react';

function StaticItem() {
    const [staticitem, setStaticitem] = useState([
        {   id: 1, 
            stockName: "第一金融控股",
            price:26.45,
            numbers:6000,
            cost:26.45 * 6000
        },
        {   id: 2, 
            stockName: "元大寶來台灣卓越50證券投資信託基金",
            price:126.65,
            numbers:1000,
            cost:126.65 * 1000
        },
        {   id: 3, 
            stockName: "台灣積體電路製造",
            price:556,
            numbers:300,
            cost:556 * 300
            
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
                    {staticitem.price} 元

                </td>
                <td className="px-6 py-4 text-right">
                    {staticitem.numbers}
                </td>
                <td className="px-6 py-4 text-right">
                    <span class="material-symbols-outlined sym-money">attach_money</span>
                    {staticitem.cost} 元
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

export default StaticItem;