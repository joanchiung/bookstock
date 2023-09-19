import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
        <aside
            id="logo-sidebar"
            className="dark fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="material-symbols-outlined text-gray-400">dashboard</span>
                            <span className="ml-3">資產總覽</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookstock" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="material-symbols-outlined text-gray-400">monitoring</span>
                            <span className="flex-1 ml-3 whitespace-nowrap">股票記帳</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calculator" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="material-symbols-outlined  text-gray-400">calculate</span>
                            <span className="flex-1 ml-3 whitespace-nowrap">計算機</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span class="material-symbols-outlined  text-gray-400">logout</span>
                            <span className="flex-1 ml-3 whitespace-nowrap">登出</span>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </aside>
        <Outlet />
        </>




    );

}


export default Sidebar;
