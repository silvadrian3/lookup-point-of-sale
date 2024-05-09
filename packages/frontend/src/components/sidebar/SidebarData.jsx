import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTachometer, faBooks, faUsers, faUsersCog } from '@fortawesome/pro-light-svg-icons';
import { FaTruck, FaUserFriends, FaChartBar } from "react-icons/fa";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri"
import {GiHandTruck} from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md"
import { BsFillTagsFill } from "react-icons/bs"
import { TiShoppingCart } from "react-icons/ti"
import { IoWalletSharp } from "react-icons/io5"

import { AppRoutes } from "../../constants/AppRoutes";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: AppRoutes.DASHBOARD,
    icon: <RiDashboardFill style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },{
    title: 'My Account',
    path: AppRoutes.PROFILE,
    icon: <MdAccountCircle style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },{
    title: 'Settings',
    path: AppRoutes.SETTINGS,
    icon: <RiSettings5Fill style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Suppliers',
    path: AppRoutes.SUPPLIERS,
    icon: <FaTruck style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: AppRoutes.PRODUCTS,
    icon: <BsFillTagsFill style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Stocks Management',
    path: AppRoutes.STOCKSMANAGEMENT,
    icon: <GiHandTruck style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: AppRoutes.CUSTOMERS,
    icon: <FaUserFriends style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Sales',
    path: AppRoutes.SALES,
    icon: <TiShoppingCart style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Expenses',
    path: AppRoutes.EXPENSES,
    icon: <IoWalletSharp style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: AppRoutes.REPORTS,
    icon: <FaChartBar style={{ color: 'var(--mysteryGrey)' }} />,
    cName: 'nav-text'
  }
];