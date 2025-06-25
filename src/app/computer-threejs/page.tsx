"use client";
import ComputerThreeJs from "@/components/features/ComputerThreeJs";
import { PageTitle } from "@/components/common";

export default function ComputerThreeJsPage() {
  return (
    <div className="flex w-full flex-col gap-6 p-6">
      <PageTitle>Computer Three.js</PageTitle>
      <div className="flex w-full flex-col gap-4">
        <p className="text-muted-foreground">
          Uma demonstração interativa usando Three.js com renderização ASCII.
        </p>
        <ComputerThreeJs />
      </div>
    </div>
  );
}
