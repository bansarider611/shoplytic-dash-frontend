import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { categories, salesTrend } from "@/lib/analytics-data";

const tooltipStyle = { border: "1px solid var(--border)", borderRadius: 12, boxShadow: "var(--shadow-soft)", fontSize: 12 };

export function SalesAreaChart({ compact = false }: { compact?: boolean }) {
  const data = compact ? salesTrend.slice(4) : salesTrend;
  return (
    <div className={compact ? "h-40" : "h-72"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 8, left: compact ? -28 : -14, bottom: 0 }}>
          <defs><linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--primary)" stopOpacity={0.36}/><stop offset="100%" stopColor="var(--primary)" stopOpacity={0.02}/></linearGradient></defs>
          {!compact && <CartesianGrid stroke="var(--border)" strokeDasharray="4 6" vertical={false}/>} 
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
          {!compact && <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} tickFormatter={(v) => `$${v}k`} />}
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v}k`, "Sales"]}/>
          <Area type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={3} fill="url(#salesFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryDonut() {
  return <div className="relative h-56"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={categories} dataKey="value" nameKey="name" innerRadius={58} outerRadius={86} paddingAngle={3} stroke="none">{categories.map((entry) => <Cell key={entry.name} fill={entry.tone}/>)}</Pie><Tooltip contentStyle={tooltipStyle}/></PieChart></ResponsiveContainer><div className="pointer-events-none absolute inset-0 grid place-items-center"><div className="text-center"><strong className="block text-2xl">$184k</strong><span className="text-xs text-muted-foreground">total sales</span></div></div></div>;
}

export function ProfitBarChart() {
  return <div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={salesTrend.slice(3)} margin={{ left: -20 }}><CartesianGrid stroke="var(--border)" strokeDasharray="4 6" vertical={false}/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}/><YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="sales" fill="var(--blue)" radius={[6,6,0,0]}/><Bar dataKey="profit" fill="var(--mint)" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></div>;
}