import Input from "./Input.js";
import Count from "./Count.js";
import { useReducer } from "react";
import React from "react";

import { useState } from 'react';

export default function Calculator() {

    const [inputValues, setInputValues] = useReducer(
        (state, newState) => {    
            return { ...state, ...newState };
        },
        { snumber: "", buyp: "", sellp: "" }
    );
    
    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
        setInputValues({ [name]: value });
    }; 

    const options = [
        {
            label: "現貨股票",
            value: 0.003
        },
        {
            label: "ETF",
            value: 0.001
        }
    ];

  // for option value 數值 使用的
    const [stype, setStype] = useState(options[0].value);


    /** 
    // for option label 文字 使用的
    const [stext, setStext] = useState(options[0].innerText);
    */

    const handleChange = (evt) => {
        setStype( evt.target.value);
    };


    return (
        <div className="container-mp">
            <h2 className="content-h2title">計算機</h2>
            {/* 輸入各項數據 */}
            <h3 className="content-h3title step-icon">1</h3>
            <h3 className="content-h3title pt-1">輸入數據</h3>
            <div className="my-6 input-stock md:columns-5 sm:columns-2 ">
                <label className="input-title">類型選擇 </label>
                <select  
                    value={stype} 
                    onChange={handleChange}
                    className="input-frame-choice"
                >
                    {options.map((option) => (
                        <option
                            key={option.value}  
                            value={option.value} >
                            {option.label}
                        </option>
                    ))}
                </select>
                
                <div className="mb-6">
                    <label htmlFor="default-input" className="input-title">股數</label>
                    <Input
                        name="snumber"
                        type={"number"}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="mb-6 ">
                    <label htmlFor="default-input" className="input-title">買入價格</label>
                    <Input 
                        name="buyp"
                        type={"number"}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="mb-6 ">
                    <label htmlFor="default-input" className="input-title">賣出價格</label>
                    <Input 
                        name="sellp"
                        type={"number"}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            {/* 列表出各項數據 */}
            <h3 className="content-h3title step-icon">2</h3>
            <h3 className="content-h3title pt-1">預期獲利</h3>

            <div className="ui-frame my-6">
                <h4 className=" content-h4title ">試算結果</h4>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="ui-frame-table-thead">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                項目
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg  text-right">
                                數量 / 價格
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="ui-frame-table-th">
                                證券交易稅稅率
                            </th>
                            <td className="px-6 py-4 text-right">
                                <span>{stype}</span>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="ui-frame-table-th">
                                公定手續費
                            </th>
                            <td className="px-6 py-4  text-right">
                                <span>0.1425% </span>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="ui-frame-table-th">
                                股數
                            </th>
                            <td className="px-6 py-4  text-right">
                                <span>{inputValues.snumber} 股</span>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="ui-frame-table-th">
                                買入價格
                            </th>
                            <td className="px-6 py-4  text-right">
                                <span class="material-symbols-outlined sym-money">attach_money</span>
                                <span>{inputValues.buyp} 元</span>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="ui-frame-table-th">
                                賣出價格
                            </th>
                            <td className="px-6 py-4  text-right">
                                <span class="material-symbols-outlined sym-money">attach_money</span>
                                <span >{inputValues.sellp} 元</span>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            
                <Count stype={stype} snumber={inputValues.snumber} buyp={inputValues.buyp} sellp={inputValues.sellp} />
            </div>


            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    證券交易稅稅率：0.3% (目前尚未加入)
                </li>
                <li>
                    ETF 證券交易稅稅率：0.1% (目前尚未加入)
                </li>
            </ul>

        </div >

    );
}

