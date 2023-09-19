const Home = () => {
    return (
        <div className="container-mp">
            <h2 className="content-h2title">資產總覽</h2>


            <div className="ui-frame">
                <span className="material-symbols-outlined text-gray-400 float-left">monitoring </span>
                <h4 className=" content-h4title ">我的投資組合</h4>
                <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$100,000</h6>

                <div className="flow-root">
                    <ul  className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        台股
                                    </p>
                        
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>

                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        美股
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base  text-gray-500 dark:text-white">
                                    $320
                                </div>
                                
                            </div>
                        </li>

                    </ul>
                </div>    
            </div>

        </div>
    );
}

export default Home;