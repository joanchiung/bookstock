const Count = (props) => {
    let {  snumber, buyp, sellp, stype } = props;
    let resultDOM = null;

    let tax = 0.001425;
    let buyfee = snumber * buyp * tax;  // 買入手續費
    let buypcost = snumber * buyp + buyfee * 1 ; // 買入成本

    let sellfee = snumber * sellp * tax;   // 賣出手續費
    let sellstypetax = snumber * sellp * stype ; // 賣出證交稅
    let sellprofit = snumber * sellp  - sellfee - sellstypetax ; // 賣出獲利


    
    // 手續費 小於 20元，收 20元  

    if (buyfee <= 20){
        buyfee = 20 ;
    } else{
        
    }

    if (sellfee <= 20){
        sellfee = 20 ;
    } else{

    }


    // 真實利潤  
    const res = Math.round( (sellprofit - buypcost ) * 100) / 100;

    res < 0
        ? (resultDOM = <span className="text-rose-300">{res}</span>)
        :  res > 0
        ? (resultDOM = <span className="text-sky-300">{res}</span>)
        : (resultDOM = <span className="text-gray-300">{res}</span>);
        
  // 小於 0 :賠錢 / 等於 0:損益平衡 / 大於 0 :賺錢
// tax  buyfee  buypcost sellfee sellstypetax sellprofit
    return (

        <>     
        {snumber && buyp && sellp && stype && 
        tax && buyfee && buypcost && sellfee && sellstypetax && sellprofit
        ? (
            <>
            <p className="text-gray-300">你的獲利:{resultDOM}</p>




            </>
        ) : (
            <p className="text-gray-300">請輸入完整的數值</p>
        )}
        </>

    );
};

export default Count;
