export const overviewKpis = [
  { label: "Total sales", value: "$184,260", change: "+12.8%", tone: "lavender" },
  { label: "Total orders", value: "3,842", change: "+8.4%", tone: "blue" },
  { label: "Total profit", value: "$62,430", change: "+15.2%", tone: "mint" },
  { label: "Avg. order value", value: "$47.96", change: "+3.7%", tone: "peach" },
] as const;

export const salesTrend = [
  { month: "Jan", sales: 18, profit: 7 }, { month: "Feb", sales: 25, profit: 9 },
  { month: "Mar", sales: 22, profit: 8 }, { month: "Apr", sales: 31, profit: 12 },
  { month: "May", sales: 29, profit: 11 }, { month: "Jun", sales: 38, profit: 15 },
  { month: "Jul", sales: 35, profit: 14 }, { month: "Aug", sales: 43, profit: 17 },
  { month: "Sep", sales: 48, profit: 20 }, { month: "Oct", sales: 52, profit: 22 },
  { month: "Nov", sales: 47, profit: 19 }, { month: "Dec", sales: 58, profit: 25 },
];

export const categories = [
  { name: "Home & Living", value: 36, amount: "$66.3k", tone: "var(--lavender)" },
  { name: "Apparel", value: 27, amount: "$49.8k", tone: "var(--pink)" },
  { name: "Beauty", value: 21, amount: "$38.7k", tone: "var(--peach)" },
  { name: "Other", value: 16, amount: "$29.5k", tone: "var(--blue)" },
];

export const products = [
  { name: "Everyday Linen Set", category: "Home & Living", units: 486, revenue: "$24,180", trend: "+18%" },
  { name: "Cloud Cotton Tee", category: "Apparel", units: 421, revenue: "$18,945", trend: "+12%" },
  { name: "Daily Glow Serum", category: "Beauty", units: 376, revenue: "$16,544", trend: "+9%" },
  { name: "Studio Travel Mug", category: "Accessories", units: 304, revenue: "$9,424", trend: "+7%" },
  { name: "Soft Knit Throw", category: "Home & Living", units: 255, revenue: "$14,025", trend: "-3%" },
];

export const orders = [
  { id: "#10482", customer: "Ava Morgan", date: "Sep 28", total: "$148.00", status: "Paid" },
  { id: "#10481", customer: "Noah Bennett", date: "Sep 28", total: "$82.50", status: "Paid" },
  { id: "#10480", customer: "Mia Carter", date: "Sep 27", total: "$216.40", status: "Processing" },
  { id: "#10479", customer: "Leo Brooks", date: "Sep 27", total: "$64.00", status: "Paid" },
];

export const insights = [
  { title: "Friday is your strongest day", text: "Sales are 24% higher on Fridays. Consider timing launches and promotions then.", tone: "yellow" },
  { title: "Home & Living is accelerating", text: "This category grew 18% this month and now contributes over a third of revenue.", tone: "lavender" },
  { title: "Repeat buyers spend more", text: "Returning customers have a 42% higher order value than first-time shoppers.", tone: "mint" },
  { title: "One product needs attention", text: "Soft Knit Throw sales fell 3%. Review its placement, pricing, or inventory.", tone: "pink" },
] as const;

export const regions = [
  { name: "North", value: 82 }, { name: "West", value: 68 }, { name: "Central", value: 57 }, { name: "South", value: 45 },
];

export const customers = [
  { name: "Olivia Martin", orders: 18, spent: "$2,864", segment: "Champions" },
  { name: "Ethan Clark", orders: 15, spent: "$2,412", segment: "Loyal" },
  { name: "Sophia Lee", orders: 12, spent: "$1,986", segment: "Champions" },
  { name: "James Wilson", orders: 10, spent: "$1,642", segment: "Promising" },
];

export const segments = [
  { name: "Champions", count: 384, share: "18%", note: "Recent, frequent, high-value", tone: "mint" },
  { name: "Loyal", count: 612, share: "29%", note: "Consistent repeat customers", tone: "lavender" },
  { name: "Promising", count: 471, share: "22%", note: "Recent buyers with potential", tone: "blue" },
  { name: "Needs attention", count: 286, share: "14%", note: "Previously active, now slowing", tone: "peach" },
  { name: "At risk", count: 221, share: "10%", note: "High value but inactive", tone: "pink" },
  { name: "New", count: 148, share: "7%", note: "First purchase this month", tone: "yellow" },
] as const;

export const qualityRows = [
  { column: "Order date", type: "Date", completeness: 100, status: "Excellent" },
  { column: "Order total", type: "Currency", completeness: 100, status: "Excellent" },
  { column: "Product name", type: "Text", completeness: 99.8, status: "Excellent" },
  { column: "Customer ID", type: "Identifier", completeness: 94.2, status: "Review" },
  { column: "Region", type: "Category", completeness: 97.6, status: "Good" },
];