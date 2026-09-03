"use client";

import * as React from "react";
import { FolderKanban, Plus, Users, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ProjectSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

/**
 * Floating sidebar panel that displays user projects and shared projects in tabbed view.
 * Animates in/out based on isOpen prop and includes empty states for both tabs.
 */
export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects sidebar"
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-16 left-3 bottom-3 z-40 w-80 flex flex-col rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out",
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-[calc(100%+1.5rem)] opacity-0 pointer-events-none",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-surface-border shrink-0">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        {onClose && (
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={onClose}
            className="text-copy-muted hover:text-copy-primary hover:bg-subtle"
            aria-label="Close projects sidebar"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      {/* Tabs & Content */}
      <div className="flex flex-1 flex-col overflow-hidden p-3">
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          {/* My Projects Empty State */}
          <TabsContent
            value="my-projects"
            className="flex-1 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-elevated border border-surface-border text-copy-faint mb-3">
              <FolderKanban className="size-6" />
            </div>
            <p className="text-sm font-medium text-copy-primary">No projects yet</p>
            <p className="text-xs text-copy-muted mt-1 max-w-[200px]">
              Create a new project to start mapping your system architecture.
            </p>
          </TabsContent>

          {/* Shared Empty State */}
          <TabsContent
            value="shared"
            className="flex-1 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-elevated border border-surface-border text-copy-faint mb-3">
              <Users className="size-6" />
            </div>
            <p className="text-sm font-medium text-copy-primary">No shared projects</p>
            <p className="text-xs text-copy-muted mt-1 max-w-[200px]">
              Projects shared with you by collaborators will appear here.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Action */}
      <div className="p-3 border-t border-surface-border mt-auto shrink-0">
        <Button className="w-full gap-2 font-medium" size="default">
          <Plus className="size-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
