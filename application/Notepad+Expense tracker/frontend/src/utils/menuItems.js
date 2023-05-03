//import {dashboard, expenses, transactions, trend} from '../utils/Icons'
import { AnalyticsIcon, CashIcon, CutIcon } from 'chakra-ui-ionicons';
//import Homepage from "../pages/Homepage";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AnalyticsIcon />,
        link: '/dashboard'
    },
    /*{
        id: 2,
        title: "Return to Home",
        icon:<AnalyticsIcon />,
        link: "/Homepage",
    },*/
    {
        id: 3,
        title: "Incomes",
        icon: <CashIcon />,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: <CutIcon />,
        link: "/dashboard",
    },
]