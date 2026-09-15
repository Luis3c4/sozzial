import { CheckCircle2, Clock, RefreshCw, Wallet, XCircle } from "lucide-react";
import { PlatformIcon } from "@/components/PlatformIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RecargaDialog } from "./recarga-dialog";

type OrderStatus = "Completado" | "En proceso" | "Pendiente" | "Cancelado";

type OrderHistoryItem = {
  id: string;
  name: string;
  platform: string;
  network: string;
  quantity: string;
  date: string;
  price: string;
  status: OrderStatus;
};

const balance = "24.75";

const history: OrderHistoryItem[] = [
  { id: "9001", name: "Seguidores reales", platform: "instagram", network: "Instagram", quantity: "1,000 unidades", date: "02/09/2026", price: "4.50", status: "Completado" },
  { id: "9002", name: "Vistas de reels", platform: "instagram", network: "Instagram", quantity: "10,000 unidades", date: "30/08/2026", price: "3.20", status: "Completado" },
  { id: "9003", name: "Likes por publicación", platform: "facebook", network: "Facebook", quantity: "500 unidades", date: "28/08/2026", price: "1.10", status: "En proceso" },
  { id: "9004", name: "Seguidores mundial", platform: "tiktok", network: "TikTok", quantity: "2,000 unidades", date: "25/08/2026", price: "7.80", status: "Completado" },
  { id: "9005", name: "Repost premium", platform: "x", network: "X", quantity: "300 unidades", date: "22/08/2026", price: "2.40", status: "Pendiente" },
  { id: "9006", name: "Comentarios personalizados", platform: "instagram", network: "Instagram", quantity: "100 unidades", date: "18/08/2026", price: "5.00", status: "Cancelado" },
];

function statusBadgeClassName(status: OrderStatus) {
  switch (status) {
    case "Completado":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    case "En proceso":
      return "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "Cancelado":
      return "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400";
    default:
      return "border-border bg-muted text-muted-foreground";
  }
}

function StatusIcon({ status }: { status: OrderStatus }) {
  const className = "h-3.5 w-3.5";
  switch (status) {
    case "Completado":
      return <CheckCircle2 className={className} />;
    case "En proceso":
      return <RefreshCw className={className} />;
    case "Cancelado":
      return <XCircle className={className} />;
    default:
      return <Clock className={className} />;
  }
}

export default function RecargaPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
        Mi cuenta
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Recargas y saldo
      </h1>

      <Card className="mt-8 gap-0 py-0">
        <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Saldo disponible</p>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${balance}</p>
            </div>
          </div>
          <RecargaDialog />
        </CardContent>
      </Card>

      <h2 className="mt-10 text-xl font-semibold text-foreground">Historial de servicios</h2>

      <div className="mt-5 flex flex-col gap-3">
        {history.map((item) => (
          <Card key={item.id} className="gap-0 py-0">
            <CardContent className="flex items-center gap-4 p-4">
              <span className="flex h-8 items-center rounded-md bg-muted px-2 text-xs font-medium text-muted-foreground">
                #{item.id}
              </span>
              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <PlatformIcon platform={item.platform} className="h-3.5 w-3.5" />
                    {item.network}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.quantity} · {item.date}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm font-semibold text-foreground">${item.price}</p>
                <Badge variant="outline" className={statusBadgeClassName(item.status)}>
                  <StatusIcon status={item.status} />
                  {item.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
