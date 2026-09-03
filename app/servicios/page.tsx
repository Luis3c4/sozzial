"use client";

import { useState } from "react";
import { ChevronRight, Clock, RefreshCw, Search, ShieldCheck } from "lucide-react";
import { PlatformIcon } from "@/components/PlatformIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { networks, type ServiceBadge } from "./data";

function badgeClassName(badge: ServiceBadge) {
  switch (badge) {
    case "Alta":
      return "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400";
    case "Media":
      return "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "Premium":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    default:
      return "";
  }
}

export default function ServiciosPage() {
  const [networkKey, setNetworkKey] = useState(networks[0].key);
  const [categoryKey, setCategoryKey] = useState(networks[0].categories[0].key);
  const [query, setQuery] = useState("");

  const network = networks.find((n) => n.key === networkKey) ?? networks[0];
  const category = network.categories.find((c) => c.key === categoryKey) ?? network.categories[0];

  const q = query.trim().toLowerCase();
  const filteredServices = q
    ? category.services.filter((s) => s.id.includes(q) || s.name.toLowerCase().includes(q))
    : category.services;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
        Panel de servicios
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Elige una red, luego un servicio
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Solo ves lo que necesitas: primero la plataforma, después la categoría y al final las opciones concretas
        con su precio.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {networks.map((n) => (
          <Button
            key={n.key}
            type="button"
            variant={n.key === networkKey ? "default" : "outline"}
            onClick={() => setNetworkKey(n.key)}
            className="h-14 justify-start gap-2 rounded-xl px-4 text-base"
          >
            <PlatformIcon platform={n.key} className="h-5 w-5" />
            {n.label}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-2">
          <p className="px-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Servicios de {network.label}
          </p>
          {network.categories.map((c) => (
            <Button
              key={c.key}
              type="button"
              variant={c.key === categoryKey ? "secondary" : "ghost"}
              onClick={() => setCategoryKey(c.key)}
              className="h-11 justify-between rounded-lg px-3 text-sm font-medium"
            >
              <span>{c.label}</span>
              <Badge variant="outline">{c.services.length}</Badge>
            </Button>
          ))}
        </div>

        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">{category.label}</h2>
              <p className="text-sm text-muted-foreground">
                Cuentas reales y bots de alta calidad con relleno garantizado.
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar o ID"
                className="h-9 pl-9"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {filteredServices.map((s) => (
              <Card key={s.id} className="gap-0 py-0">
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">#{s.id}</span>
                      <span className="text-base font-semibold text-foreground">{s.name}</span>
                      {s.badge && (
                        <Badge variant="outline" className={badgeClassName(s.badge)}>
                          {s.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {s.range}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {s.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <RefreshCw className="h-3.5 w-3.5" />
                        {s.refill}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${s.price}</p>
                      <p className="text-xs text-muted-foreground">por 1000</p>
                    </div>
                    <Button className="gap-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-600/90">
                      Comprar
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredServices.length === 0 && (
              <p className="py-10 text-center text-sm text-muted-foreground">No se encontraron servicios.</p>
            )}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">Precios en USD por cada 1000 unidades. Mín. 10 por orden.</p>
        </div>
      </div>
    </div>
  );
}
