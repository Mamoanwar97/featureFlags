import type { FeatureFlag } from "@/types/feature-flags";
import { flexRender, type ColumnDef, type Table } from "@tanstack/react-table";
import { Spinner } from "@/components/ui/spinner";
import { TableCell, TableRow } from "@/components/ui/table";

type TableBodyContentProps<TValue> = {
  table: Table<FeatureFlag>;
  isLoading: boolean;
  columns: ColumnDef<FeatureFlag, TValue>[];
};

export function TableBodyContent<TValue>({
  table,
  isLoading,
  columns,
}: TableBodyContentProps<TValue>) {
  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="py-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <Spinner className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Loading flags...
            </span>
          </div>
        </TableCell>
      </TableRow>
    );
  }

  if (table.getRowModel().rows?.length) {
    return (
      <>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="align-middle text-center">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <TableRow>
      <TableCell colSpan={columns.length} className="py-16 text-center">
        <p className="text-sm font-medium">No matching feature flags</p>
        <p className="text-xs text-muted-foreground mt-1">
          Adjust your filters to see results
        </p>
      </TableCell>
    </TableRow>
  );
}
