import {useState} from 'react';
import {v4} from 'uuid';

const Edit = ({add}) => {


    const [stock, setStock] = useState([])
    function stockChange(e) {
        setStock(e.target.value)
    }

    const [price, setPrice] = useState([])
    function priceChange(e) {
        setPrice(e.target.value)
    }


    const [quantity, setQuantity] = useState([])
    function quantityChange(e) {
        setQuantity(e.target.value)
    }

    function addItem() {
        add(function (preData) {
            return [
                ...preData, {
                    id: v4(),
                    stock,
                    price,
                    
                    quantity


                }
            ]
        })

    }




    return (
        <div id=" ">  
                <form>   
                    {/** 
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" value={stock} onChange={stockChange} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="輸入股票名稱或代號..." required/>
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Search</button>
                    </div>
                    */}


                    <div className="mt-6 input-stock columns-3 ">
                        <div className="mb-6">
                            <label htmlFor="default-input" className="input-title">股票名稱</label>
                            <input type="text"value={stock} onChange={stockChange} id="default-input"  className="input-frame" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="default-input" className="input-title">股數</label>
                            <input type="number" value={quantity} onChange={quantityChange} id="default-input"  className="input-frame" />
                        </div>

                        
                        <div className="mb-6">
                            <label htmlFor="default-input" className="input-title">購買價格</label>
                            <input type="text" value={price} onChange={priceChange}  id="default-input"  className="input-frame" />
                        </div>
                    </div>

                </form>



                <button onClick={addItem}  type = "button" className = "add btn-add-invest" >
                    <span className="material-symbols-outlined">add</span>
                    增加投資
                </button>
            </div>

    );
};

export default Edit;


