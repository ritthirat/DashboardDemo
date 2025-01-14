class ChartData {
  static generateCustomerByDay(data: any[]) {
    return data.map(item => ({
      data: item.total
    }))
  }

  static calculateAverage(data: any[]) {
    const totalSum = data.reduce((acc, item) => acc + item.total, 0)

    return totalSum / data.length
  }

  static generateRevenueData(revenueData: any) {
    return Array(12)
      .fill(0)
      .map((_, index) => ({
        name: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index],
        revenue: revenueData.series[0].data[index],
        profit: revenueData.series[1].data[index]
      }))
  }
}

export default ChartData
