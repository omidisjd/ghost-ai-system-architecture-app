"use client";

import * as React from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-base text-copy-primary">
      {/* Fixed-height Editor Navbar */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Main Workspace Surface / Canvas Shell */}
      <main className="relative flex flex-1 overflow-hidden">
        {/* Floating Project Sidebar */}
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Editor Canvas Area */}
        <div className="relative flex flex-1 items-center justify-center bg-base">
          <div className="text-center select-none">
            <h1 className="text-2xl font-bold tracking-tight text-copy-primary">
              ghost.ai
            </h1>
            <p className="mt-2 text-sm text-copy-muted max-w-sm">
              Real-time collaborative system design workspace.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
