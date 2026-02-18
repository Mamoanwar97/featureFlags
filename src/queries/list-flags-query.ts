import { listFeatures } from "../apis/features";
import { useQuery } from "@tanstack/react-query";

export function listFlagsQuery() {
  return useQuery({
    queryKey: ["featureFlags"],
    queryFn: ({ signal }) => listFeatures(signal),
    refetchOnWindowFocus: false,
  });
}
