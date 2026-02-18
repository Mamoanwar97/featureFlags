import type { FeatureFlag } from "@/types/feature-flags";
import type { ColumnDef } from "@tanstack/react-table";
import { DateCell } from "./cells/date-cell";
import { ActionCell } from "./cells/action-cell";

export const columns: ColumnDef<FeatureFlag>[] = [
  {
    accessorKey: "name",
    header: "Name",
    size: 200,
    minSize: 200,
  },
  {
    accessorKey: "environment",
    header: "Environment",
    filterFn: "arrIncludesSome",
    size: 200,
    minSize: 200,
  },
  { accessorKey: "status", header: "Status", size: 200, minSize: 200 },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: DateCell,
    size: 200,
    minSize: 200,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ActionCell,
    size: 200,
    minSize: 200,
  },
];
