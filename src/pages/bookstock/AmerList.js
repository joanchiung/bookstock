import Item from "./AmerItem";
import AstaticItem from "./AstaticItem";
import React from 'react';

const AmerList = ({ listAmerData, deleteAmerData }) => {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            名稱
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            購買價格
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            股數
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            成本
                        </th>
                        <th scope="col" className="px-6 py-3">
                            刪除
                        </th>
                    </tr>
                </thead>

                <tbody className="list">
                    {/* 靜態資料 */}
                    <AstaticItem />

                    {/* 動態資料 */}
                    {listAmerData && listAmerData.map((item) => {
                        const {  stock, price, quantity,  id } = item;
                        return (
                            <Item
                                key={id}
                                id={id}

                                stock={stock}  
                                price={price} 
                                quantity={quantity}   

                                deleteAmerData={deleteAmerData}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AmerList;

