import type { FeatureFlag } from "./feature-flags";

export type ListFeatureFlagResponse = {
  featureFlags: Array<FeatureFlag>;
};

export type ToggleFeatureFlagResponse = {
  featureFlag: FeatureFlag;
};
