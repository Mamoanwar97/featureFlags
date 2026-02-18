export type Environment = "development" | "staging" | "production";

export type Status = "enabled" | "disabled";

export type FeatureFlag = {
  id: string;
  name: string;
  environment: Environment;
  status: Status;
  createdAt: string;
};

export type DisplayFeatureFlag = Omit<FeatureFlag, "id">;
