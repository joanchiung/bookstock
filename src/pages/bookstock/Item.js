const Item = ({id,  stock, price, quantity, marketcap, deleteData })=> {

    function deleteItem() {
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }


    return(
        <tr className="tr-list">
            <td className="td-stock-name">
                {stock}
            </td>

            <td className="px-6 py-4 text-right">
                <span class="material-symbols-outlined sym-money">attach_money</span>
                {price} 元
            </td>

            <td className="px-6 py-4 text-right">
                {quantity}
            </td>

            <td className="px-6 py-4 text-right">
                <span class="material-symbols-outlined sym-money">attach_money</span>
                {price * quantity} 元
            </td>
            <td className="px-6 py-4">
                <button onClick={deleteItem} className="remove td-btn-delete">
                    刪除
                </button>
            </td>
        </tr>


    );
};

export default Item;

