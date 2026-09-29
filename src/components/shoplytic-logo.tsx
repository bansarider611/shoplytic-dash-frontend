import { Link } from "@tanstack/react-router";

export function ShoplyticLogo({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-foreground"><span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground shadow-soft">S</span>{!compact && <span className="text-lg">Shoplytic</span>}</Link>;
}