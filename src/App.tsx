"use client";
import "./App.css";
import { FeatureTable } from "./featuresTable/data-table";
import { OverviewCards } from "./overview-cards";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 min-w-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Feature Flags</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview and management across all environments
        </p>
      </div>
      <OverviewCards />
      <FeatureTable />
    </div>
  );
}

export default App;
