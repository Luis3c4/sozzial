"use client";

import { useState } from "react";
import { Check, Copy, ImagePlus, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const YAPE_NUMBER = "987 654 321";
const YAPE_NAME = "Leo Villena";

export function RecargaDialog() {
    const [copied, setCopied] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    async function handleCopy() {
        await navigator.clipboard.writeText(YAPE_NUMBER.replace(/\s/g, ""));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button className="h-10 gap-1.5 rounded-full bg-emerald-600 px-5 text-white hover:bg-emerald-600/90">
                        <Plus className="h-4 w-4" />
                        Recargar saldo
                    </Button>
                }
            />
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-lg">Recargar saldo</DialogTitle>
                    <DialogDescription>
                        Envía el pago por Yape y adjunta la captura. Acreditaremos tu saldo en
                        minutos tras verificar el comprobante.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex items-center justify-between gap-4 rounded-xl border bg-muted/40 p-4">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Yape al número
                        </p>
                        <p className="mt-1 text-2xl font-bold text-foreground">{YAPE_NUMBER}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Nombre: <span className="font-semibold text-foreground">{YAPE_NAME}</span>
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="gap-1.5 rounded-full border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400"
                        onClick={handleCopy}
                    >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copiado" : "Copiar"}
                    </Button>
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="recarga-monto">Monto recargado (S/)</Label>
                    <Input id="recarga-monto" type="number" min={5} placeholder="Mínimo S/ 5" />
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="recarga-captura">Captura del pago</Label>
                    <label
                        htmlFor="recarga-captura"
                        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground transition-colors hover:border-ring hover:bg-muted/40"
                    >
                        <ImagePlus className="h-6 w-6" />
                        {fileName ?? "Toca para adjuntar la captura"}
                        <input
                            id="recarga-captura"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                        />
                    </label>
                </div>

                <Button className="h-11 w-full gap-1.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-600/90">
                    <Send className="h-4 w-4" />
                    Enviar comprobante
                </Button>
            </DialogContent>
        </Dialog>
    );
}
