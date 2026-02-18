import type { FeatureFlag } from "@/types/feature-flags";
import type { CellContext } from "@tanstack/react-table";
import { useMutation } from "@tanstack/react-query";
import { toggleFeatureFlag } from "@/apis/features";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
type ActionCellProps = CellContext<FeatureFlag, unknown>;

export const ActionCell = ({ row }: ActionCellProps) => {
  const toggleMutation = useMutation({
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

  const isEnabled = row.original.status === "enabled";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => toggleMutation.mutate()}
      disabled={toggleMutation.isPending}
      className={
        isEnabled
          ? "text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-600"
          : "text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
      }
    >
      {toggleMutation.isPending ? (
        <Spinner data-icon="inline-start" />
      ) : isEnabled ? (
        "Disable"
      ) : (
        "Enable"
      )}
    </Button>
  );
};
