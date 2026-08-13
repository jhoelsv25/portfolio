import * as React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
