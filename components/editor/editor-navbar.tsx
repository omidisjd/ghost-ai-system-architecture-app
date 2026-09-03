"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
}

/**
 * Top navigation bar for the editor with sidebar toggle button and branding.
 * Displays the current sidebar state and provides controls for toggling it.
 */
export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "h-14 w-full shrink-0 border-b border-surface-border bg-surface px-4 flex items-center justify-between select-none z-30",
        className
      )}
    >
      {/* Left section: Sidebar toggle button */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          className="text-copy-secondary hover:text-copy-primary hover:bg-subtle"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-copy-primary">
            ghost.ai
          </span>
        </div>
      </div>

      {/* Center section: Project info / canvas status placeholder */}
      <div className="flex items-center gap-2 text-sm text-copy-muted">
        {/* Ready for project title / breadcrumbs in future chapters */}
      </div>

      {/* Right section: Stays empty for now */}
      <div className="flex items-center gap-2">
        {/* Ready for spec export / AI triggers in future chapters */}
      </div>
    </header>
  );
}
