import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
      <p className="mb-8 text-lg text-neutral-600">Página não encontrada.</p>
      <Link
        href="/"
        className="rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
