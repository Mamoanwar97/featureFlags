import type { FeatureFlag } from "@/types/feature-flags";
import { displayDate } from "@/featuresTable/cells/utils";
import type { CellContext } from "@tanstack/react-table";

type DateCellProps = CellContext<FeatureFlag, unknown>;

export const DateCell = ({ row }: DateCellProps) => {
  const date = displayDate(row.getValue("createdAt") as string);
  return <>{date}</>;
};
