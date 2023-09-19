import {useState} from 'react';
import {v4} from 'uuid';

const AmerEdit = ({add}) => {


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

    function addAmerItem() {
        add(function (preAmerData) {
            return [
                ...preAmerData, {
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

                <button onClick={addAmerItem}  type = "button" className = "add btn-add-invest" >
                    <span className="material-symbols-outlined">add</span>
                    增加投資
                </button>
            </div>

    );
};

export default AmerEdit;


