// Types for dashboard data
export type StatCardData = {
  title: string
  total: string | number
  icon: string
}

export type RevenueData = {
  amount: string
  trend: number
  series: {
    name: string
    data: number[]
  }[]
}

export type TransactionData = {
  id: number
  type: 'credit' | 'debit'
  amount: number
  status: 'confirmed' | 'pending' | 'failed'
  date: string
  client: {
    name: string
    avatar: string
    company: string
  }
}

export type ProjectData = {
  id: number
  name: string
  progress: number
  status: 'active' | 'completed' | 'delayed'
  deadline: string
  assigned: {
    name: string
    avatar: string
  }[]
}

export type ActivityData = {
  id: number
  type: 'task' | 'comment' | 'project' | 'meeting'
  title: string
  time: string
  meta?: {
    project?: string
    comment?: string
  }
  user: {
    name: string
    avatar: string
  }
}

export type TipData = {
  id: number
  title: string
  icons: string
  total: number
  items: number
}

export type ReportCustomerByDay = {
  day: string
  total: number
}

export type HistoryList = {
  id: number
  date: Date
  status: string
  time: Date
  createDate: Date
}

// Mock data for statistics cards
export const statCards: StatCardData[] = [
  {
    title: 'ยอดขาย',
    total: '$48.2k',
    icon: 'tabler-currency-dollar'
  },
  {
    title: 'ยอดขายต่ำสุด',
    total: '2,856',
    icon: 'tabler-ticket'
  },
  {
    title: 'ยอดขายสูงสุด',
    total: '86',
    icon: 'tabler-credit-card'
  },
  {
    title: 'การทำรายการ',
    total: '86',
    icon: 'tabler-chart-pie-2'
  }
]

// Mock data for revenue chart
export const revenueData: RevenueData = {
  amount: '$42,389',
  trend: 15.2,
  series: [
    {
      name: 'Revenue',
      data: [32, 48, 36, 52, 45, 56, 42, 58, 48, 42, 56, 45]
    },
    {
      name: 'Profit',
      data: [24, 36, 28, 42, 36, 48, 36, 46, 38, 32, 44, 35]
    }
  ]
}

// Mock data for recent transactions
export const recentTransactions: TransactionData[] = [
  {
    id: 1,
    type: 'credit',
    amount: 1250.89,
    status: 'confirmed',
    date: '2024-02-15',
    client: {
      name: 'Sarah Wilson',
      avatar: '/images/avatars/1.png',
      company: 'TechCorp Inc.'
    }
  },
  {
    id: 2,
    type: 'debit',
    amount: 859.32,
    status: 'pending',
    date: '2024-02-14',
    client: {
      name: 'Michael Chen',
      avatar: '/images/avatars/2.png',
      company: 'Digital Solutions'
    }
  },
  {
    id: 3,
    type: 'credit',
    amount: 2345.67,
    status: 'confirmed',
    date: '2024-02-14',
    client: {
      name: 'Emma Davis',
      avatar: '/images/avatars/3.png',
      company: 'InnovateLab'
    }
  },
  {
    id: 4,
    type: 'credit',
    amount: 678.45,
    status: 'failed',
    date: '2024-02-13',
    client: {
      name: 'James Rodriguez',
      avatar: '/images/avatars/4.png',
      company: 'WebTech Solutions'
    }
  }
]

// Mock data for projects
export const projects: ProjectData[] = [
  {
    id: 1,
    name: 'App Redesign Project',
    progress: 85,
    status: 'active',
    deadline: '2024-03-20',
    assigned: [
      { name: 'John Doe', avatar: '/images/avatars/1.png' },
      { name: 'Sarah Smith', avatar: '/images/avatars/2.png' },
      { name: 'Mike Johnson', avatar: '/images/avatars/3.png' }
    ]
  },
  {
    id: 2,
    name: 'Landing Page Development',
    progress: 100,
    status: 'completed',
    deadline: '2024-02-10',
    assigned: [
      { name: 'Emily Brown', avatar: '/images/avatars/4.png' },
      { name: 'David Wilson', avatar: '/images/avatars/5.png' }
    ]
  },
  {
    id: 3,
    name: 'Database Migration',
    progress: 45,
    status: 'delayed',
    deadline: '2024-03-15',
    assigned: [
      { name: 'Alex Turner', avatar: '/images/avatars/6.png' },
      { name: 'Lisa Anderson', avatar: '/images/avatars/7.png' },
      { name: 'Tom Harris', avatar: '/images/avatars/8.png' }
    ]
  }
]

// Mock data for recent activity
export const recentActivity: ActivityData[] = [
  {
    id: 1,
    type: 'task',
    title: 'Completed task "Update User Interface"',
    time: '2 hours ago',
    user: {
      name: 'John Doe',
      avatar: '/images/avatars/1.png'
    }
  },
  {
    id: 2,
    type: 'comment',
    title: 'Commented on project',
    time: '4 hours ago',
    meta: {
      project: 'App Redesign',
      comment: 'Great progress on the new features!'
    },
    user: {
      name: 'Sarah Smith',
      avatar: '/images/avatars/2.png'
    }
  },
  {
    id: 3,
    type: 'project',
    title: 'Started new project "E-commerce Platform"',
    time: '6 hours ago',
    user: {
      name: 'Mike Johnson',
      avatar: '/images/avatars/3.png'
    }
  },
  {
    id: 4,
    type: 'meeting',
    title: 'Scheduled client meeting',
    time: '1 day ago',
    meta: {
      project: 'Website Redesign'
    },
    user: {
      name: 'Emily Brown',
      avatar: '/images/avatars/4.png'
    }
  }
]

export const tipData: TipData[] = [
  {
    id: 1,
    title: 'ส่งรูปขึ้นจอ',
    icons: 'tabler-plane',
    total: 999999,
    items: 105
  },
  {
    id: 2,
    title: 'ส่งวิดีโอขึ้นจอ',
    icons: 'tabler-plane',
    total: 888888,
    items: 2
  },
  {
    id: 3,
    title: 'ส่งข้องความขึ้นจอ',
    icons: 'tabler-plane',
    total: 400000,
    items: 109
  },
  {
    id: 4,
    title: 'ส่งทิป',
    icons: 'tabler-plane',
    total: 4564654,
    items: 250
  }
]

export const reportCustomerByDay: ReportCustomerByDay[] = [
  { day: 'วันจันทร์', total: 10 },
  { day: 'วันอังคาร', total: 5 },
  { day: 'วันพุธ', total: 8 },
  { day: 'วันพฤหัสบดี', total: 12 },
  { day: 'วันศุกร์', total: 15 },
  { day: 'วันเสาร์', total: 500 },
  { day: 'วันอาทิตย์', total: 18 }
]

export const historylist: HistoryList[] = [
  {
    id: 1,
    date: new Date(),
    status: 'success',
    time: new Date(),
    createDate: new Date()
  },
  {
    id: 2,
    date: new Date(),
    status: 'failed',
    time: new Date(),
    createDate: new Date()
  },
  {
    id: 3,
    date: new Date(),
    status: 'success',
    time: new Date(),
    createDate: new Date()
  },
  {
    id: 4,
    date: new Date(),
    status: 'success',
    time: new Date(),
    createDate: new Date()
  }
]
