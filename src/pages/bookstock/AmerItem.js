const AmerItem = ({id,  stock, price, quantity, deleteAmerData })=> {

    function deleteAmerItem() {
        deleteAmerData(function (prev) {
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
                美金 {price} 元
            </td>

            <td className="px-6 py-4 text-right">
                {quantity}
            </td>

            <td className="px-6 py-4 text-right">
            <span class="material-symbols-outlined sym-money">attach_money </span>
                台幣 {price * quantity * 30} 元
            </td>
            <td className="px-6 py-4">
                <button onClick={deleteAmerItem} className="remove td-btn-delete">
                    刪除
                </button>
            </td>
        </tr>


    );
};

export default AmerItem;

