import React from "react";

export default function WebsiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      Sidebar
      {children}
    </main>
  );
}
