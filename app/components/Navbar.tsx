import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/8 bg-white/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
            <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
                <Link href="/" className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
                    Sozzial
                </Link>
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li>
                        <Link href="/servicios" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link href="/recarga" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Recarga
                        </Link>
                    </li>
                    <li>
                        <Link href="/iniciar-sesion" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Iniciar sesión
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/registrate"
                            className="flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                        >
                            Regístrate
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
