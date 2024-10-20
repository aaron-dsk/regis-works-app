import { SideBarNav } from "@/components/nav-menu";
import { Header } from "@/components/header";
import { Providers } from "./providers";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex h-screen overflow-hidden">
        <SideBarNav />
        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </Providers>
  )
}
