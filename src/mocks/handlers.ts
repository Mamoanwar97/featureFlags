import { delay, http, HttpResponse } from "msw";
import { featureFlags } from "./fixtures";
import type {
  ListFeatureFlagResponse,
  ToggleFeatureFlagResponse,
} from "@/types/msw";

export const handlers = [
  http.get("/api/feature-flags", async () => {
    const response: ListFeatureFlagResponse = {
      featureFlags: Object.values(featureFlags),
    };
    await delay(500); // Simulate network delay
    return HttpResponse.json(response);
  }),

  http.put("/api/feature-flags/:id", async (req) => {
    const { id } = req.params;
    if (typeof id !== "string" || id in featureFlags === false) {
      return HttpResponse.json(
        { error: "Feature flag not found" },
        { status: 404 },
      );
    }
    featureFlags[id] = {
      ...featureFlags[id],
      status: featureFlags[id].status === "enabled" ? "disabled" : "enabled",
    };

    const response: ToggleFeatureFlagResponse = {
      featureFlag: featureFlags[id],
    };
    await delay(500); // Simulate network delay
    return HttpResponse.json(response);
  }),
];
