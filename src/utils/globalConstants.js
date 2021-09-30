import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DashboardIcon,
  LikeIcon,
  MultiUserIcon,
  RevenueIcon,
  ScheduleIcon,
  SettingsIcon,
  TransactionDarkIcon,
  TransactionWhiteIcon,
  UserIcon,
} from '@/assets/index';

export const GLOBAL_CONSTANTS = {
  API_ENDPOINTS: { getUsers: '/users' },
  REGEX: {
    EMAIL: /^[a-z0-9](\.?[a-z0-9]){5,}@(gmail)\.com$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/,
    NAME: /^[A-Z]+$/i,
  },
  userData: {
    email: 'suryawigunaa@gmail.com',
    password: '12345678',
    firstName: 'Surya',
    lastName: 'Wiguna',
    phone: '+1283716291',
    address: '323 Fifth Ave. Canandaigua, NY',
    dob: '28 February 1996',
  },
  drawerItems: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      id: 'transactions',
      title: 'Transactions',
      icon: <TransactionWhiteIcon />,
    },
    {
      id: 'schedules',
      title: 'Schedules',
      icon: <ScheduleIcon />,
    },
    {
      id: 'users',
      title: 'Users',
      icon: <UserIcon />,
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <SettingsIcon />,
    },
  ],
  highlightCards: [
    {
      id: 'totalRevenue',
      title: 'Total Revenue',
      amount: 2129430,
      icon: <RevenueIcon />,
      className: 'total__revenue__card',
    },
    {
      id: 'totalTransaction',
      title: 'Total Transactions',
      amount: 15120,
      icon: <TransactionDarkIcon />,
      className: 'total__trans__card',
    },
    {
      id: 'totalLikes',
      title: 'Total Likes',
      amount: 9721,
      icon: <LikeIcon />,
      className: 'total__likes__card',
    },
    {
      id: 'totlaUsers',
      title: 'Total Users',
      amount: 892,
      icon: <MultiUserIcon />,
      className: 'total__users__card',
    },
  ],
  activityChartData: {
    plugin: {
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
    data: {
      labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
      datasets: [
        {
          label: 'Guest',
          data: [200, 390, 200, 300, 230, 460],
          fill: false,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderColor: '#E9A0A0',
          tension: 0.5,
        },
        {
          label: 'User',
          data: [100, 430, 150, 460, 180, 260],
          fill: false,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderColor: '#9BDD7C',
          tension: 0.5,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      borderWidth: 2,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          labels: {
            display: true,
            usePointStyle: true,
            boxWidth: 5,
            font: { size: 14 },
          },
          align: 'end',
        },
      },
    },
  },
  pieChart: {
    data: {
      labels: ['Super Hoodies', 'Custom Short Pants', 'Basic Tees'],
      datasets: [
        {
          label: 'products datasets',
          data: [14, 31, 55],
          backgroundColor: ['rgba(238, 132, 132, 1)', 'rgba(246, 220, 125, 1)', 'rgba(152, 216, 158, 1)'],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      borderWidth: 2,
      layout: {
        padding: 5,
      },
      plugins: {
        legend: {
          labels: {
            display: true,
            usePointStyle: true,
            boxWidth: 10,
            color: '#000000',
            font: { size: 14, weight: 'bold' },
            padding: 15,
          },
          position: 'right',
          align: 'middle',
          reverse: true,
        },
      },
    },
  },
  schedulesData: [
    {
      id: 1,
      title: 'Meeting with suppliers from Kuta Bali',
      time: '14.00-15.00',
      location: 'at Sunset Road, Kuta, Bali',
    },
    {
      id: 2,
      title: 'Check operation at Giga Factory 1',
      time: '18.00-20.00',
      location: 'at Central Jakarta',
    },
  ],
  screenTitles: { dashboard: 'Dashboard', users: 'Users', settings: 'Settings', schedules: 'Schedules', transactions: 'Transactions' },
  userType: { 1: 'Admin', 2: 'User' },
  genderType: { 1: 'Male', 2: 'Female' },
  paginationData: [
    {
      id: 'iconLeft',
      title: '',
      icon: <ChevronLeftIcon />,
    },
    {
      id: 'page 1',
      title: '1',
      icon: null,
    },
    {
      id: 'page 2',
      title: '2',
      icon: null,
    },
    {
      id: 'page 3',
      title: '3',
      icon: null,
    },
    {
      id: 'page 4',
      title: '4',
      icon: null,
    },
    {
      id: 'iconRight',
      title: '',
      icon: <ChevronRightIcon />,
    },
  ],
};
