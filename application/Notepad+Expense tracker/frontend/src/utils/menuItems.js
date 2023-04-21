//import {dashboard, expenses, transactions, trend} from '../utils/Icons'
import { AnalyticsIcon, CashIcon, CutIcon } from 'chakra-ui-ionicons';

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AnalyticsIcon />,
        link: '/dashboard'
    },
   /* {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
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