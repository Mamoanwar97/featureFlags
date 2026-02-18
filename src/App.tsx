"use client";
import "./App.css";
import { listFeatures } from "./apis/features";
import { FeatureTable } from "./featuresTable/data-table";
import { columns } from "./featuresTable/columns";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

function App() {
  const featureFlagsQuery = useQuery({
    queryKey: ["featureFlags"],
    queryFn: ({ signal }) => listFeatures(signal),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (featureFlagsQuery.isError) {
      toast.error("Failed to fetch feature flags. Please try again later.", {
        position: "top-center",
      });
    }
  }, [featureFlagsQuery.isError]);

  return (
    <>
      <div>Feature Flags</div>
      <div className="container mx-auto py-10">
        <FeatureTable
          isLoading={featureFlagsQuery.isLoading}
          columns={columns}
          data={featureFlagsQuery.data?.featureFlags ?? []}
        />
      </div>
    </>
  );
}

export default App;
