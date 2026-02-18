import type { FeatureFlag } from "@/types/feature-flags";
import type { CellContext } from "@tanstack/react-table";
import { useMutation } from "@tanstack/react-query";
import { toggleFeatureFlag } from "@/apis/features";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
type ActionCellProps = CellContext<FeatureFlag, unknown>;

export const ActionCell = ({ row }: ActionCellProps) => {
  const featureToggleMutation = useMutation({
    mutationFn: () => toggleFeatureFlag(row.original.id),
    onSuccess: (_, __, ___, context) => {
      context.client.invalidateQueries({ queryKey: ["featureFlags"] });
      toast.success(
        `Feature flag "${row.original.name}" has been toggled successfully.`,
        { position: "top-center", richColors: true },
      );
    },
    onError: () => {
      toast.error("Failed to toggle feature flag. Please try again later.", {
        position: "top-center",
        richColors: true,
      });
    },
  });

  return (
    <Button
      variant="ghost"
      disabled={featureToggleMutation.isPending}
      onClick={() => featureToggleMutation.mutate()}
    >
      {featureToggleMutation.isPending ? (
        <Spinner data-icon="inline-start" />
      ) : (
        "Toggle"
      )}
    </Button>
  );
};
