import type {
  ListFeatureFlagResponse,
  ToggleFeatureFlagResponse,
} from "@/types/msw";

export async function listFeatures(
  abortSignal?: AbortSignal,
): Promise<ListFeatureFlagResponse> {
  const response = await fetch("/api/feature-flags", { signal: abortSignal });
  const data = await response.json();
  return data;
}

export async function toggleFeatureFlag(
  id: string,
  abortSignal?: AbortSignal,
): Promise<ToggleFeatureFlagResponse> {
  const response = await fetch(`/api/feature-flags/${id}`, {
    method: "PUT",
    signal: abortSignal,
  });
  const data = await response.json();
  return data;
}
