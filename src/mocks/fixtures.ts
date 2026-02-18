import type { FeatureFlag } from "@/types/feature-flags";

export const featureFlags: Record<string, FeatureFlag> = {
  "a3bb189e-8bf9-3888-9912-ace4e6543002": {
    id: "a3bb189e-8bf9-3888-9912-ace4e6543002",
    name: "Dark Mode Features",
    environment: "production",
    status: "enabled",
    createdAt: "2024-01-10T08:00:00.000Z",
  },
  "b2c4d6e8-f0a2-4b6c-8d0e-2f4a6b8c0d2e": {
    id: "b2c4d6e8-f0a2-4b6c-8d0e-2f4a6b8c0d2e",
    name: "New Dashboard View",
    environment: "staging",
    status: "disabled",
    createdAt: "2024-03-15T12:30:00.000Z",
  },
  "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f": {
    id: "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
    name: "Beta Analytics Pro",
    environment: "development",
    status: "enabled",
    createdAt: "2024-05-22T09:15:00.000Z",
  },
  "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a": {
    id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    name: "Maintenance Banner",
    environment: "production",
    status: "disabled",
    createdAt: "2024-07-04T14:00:00.000Z",
  },
  "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b": {
    id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    name: "AI Suggestions Pro",
    environment: "staging",
    status: "enabled",
    createdAt: "2024-09-01T10:45:00.000Z",
  },
};
