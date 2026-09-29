import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, Box, ChevronDown, CircleHelp, Database, FileBarChart, LayoutDashboard, Lightbulb, Menu, Search, ShoppingBag, Sparkles, Tags, Users, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ShoplyticLogo } from "@/components/shoplytic-logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard },
  { label: "Sales", to: "/dashboard/sales", icon: BarChart3 },
  { label: "Products", to: "/dashboard/products", icon: Box },
  { label: "Customers", to: "/dashboard/customers", icon: Users },
  { label: "Segmentation", to: "/dashboard/segmentation", icon: Tags },
  { label: "Insights", to: "/dashboard/insights", icon: Lightbulb },
  { label: "Data Quality", to: "/dashboard/data-quality", icon: Database },
] as const;

export function DashboardShell({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen bg-dashboard md:grid md:grid-cols-[248px_1fr]">
    <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-border bg-background px-4 py-5 transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
      <div className="flex items-center justify-between px-2"><ShoplyticLogo/><Button variant="ghost" size="icon" className="md:hidden" aria-label="Close navigation" onClick={() => setOpen(false)}><X className="size-5"/></Button></div>
      <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-secondary/60 p-3"><span className="grid size-9 place-items-center rounded-lg bg-accent text-accent-foreground"><ShoppingBag className="size-4"/></span><span className="min-w-0 flex-1"><b className="block truncate text-sm">My Store</b><small className="text-muted-foreground">sales_data.csv</small></span><ChevronDown className="size-4 text-muted-foreground"/></div>
      <nav className="mt-7 space-y-1" aria-label="Analytics navigation">{nav.map((item) => { const active = pathname === item.to; return <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", active && "bg-lavender-soft text-foreground")}><item.icon className="size-[18px]"/>{item.label}</Link>; })}</nav>
      <div className="mt-auto rounded-xl bg-yellow-soft p-4"><Sparkles className="size-5 text-foreground"/><p className="mt-2 text-sm font-semibold">Fresh analysis</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Your uploaded data is ready to explore.</p></div>
      <Link to="/upload" className="mt-3 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"><FileBarChart className="size-[18px]"/>New upload</Link>
    </aside>
    {open && <button aria-label="Close navigation backdrop" className="fixed inset-0 z-30 bg-foreground/15 md:hidden" onClick={() => setOpen(false)}/>} 
    <main className="min-w-0 px-4 py-4 sm:px-6 lg:px-9 lg:py-7">
      <header className="mb-7 flex items-start justify-between gap-4"><div className="flex items-start gap-3"><Button variant="icon" size="icon" className="mt-0.5 md:hidden" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu className="size-5"/></Button><div><h1 className="text-2xl font-bold sm:text-3xl">{title}</h1><p className="mt-1 text-sm text-muted-foreground">{subtitle}</p></div></div><div className="hidden items-center gap-2 sm:flex"><Button variant="icon" size="icon" aria-label="Search"><Search className="size-4"/></Button><Button variant="icon" size="icon" aria-label="Help"><CircleHelp className="size-4"/></Button><span className="grid size-10 place-items-center rounded-full bg-peach-soft text-sm font-bold">BD</span></div></header>
      {children}
    </main>
  </div>;
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) { return <section className={cn("rounded-2xl border border-border bg-card p-5 shadow-card", className)}>{children}</section>; }
export function PanelTitle({ title, note, action }: { title: string; note?: string; action?: ReactNode }) { return <div className="mb-5 flex items-start justify-between gap-4"><div><h2 className="font-bold">{title}</h2>{note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}</div>{action}</div>; }

export function KpiGrid({ items }: { items: readonly { label: string; value: string; change: string; tone: string }[] }) { return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{items.map((item) => <div key={item.label} className={cn("rounded-2xl border border-border p-5 shadow-card", `bg-${item.tone}-soft`)}><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{item.label}</span><span className="rounded-full bg-background/70 px-2 py-1 text-xs font-semibold text-success">{item.change}</span></div><strong className="mt-4 block text-2xl font-bold">{item.value}</strong><span className="mt-1 block text-xs text-muted-foreground">vs. previous period</span></div>)}</div>; }