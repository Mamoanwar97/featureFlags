import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilterBar } from "./filters/filters-bar";
import { TableBodyContent } from "./table-body-content";
import { useEffect } from "react";
import { toast } from "sonner";
import { columns } from "./columns";
import { listFlagsQuery } from "@/queries/list-flags-query";

export function FeatureTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const featureFlagsQuery = listFlagsQuery();

  useEffect(() => {
    if (featureFlagsQuery.isError) {
      toast.error("Failed to fetch feature flags. Please try again later.", {
        position: "top-center",
      });
    }
  }, [featureFlagsQuery.isError]);

  const data = featureFlagsQuery.data?.featureFlags ?? [];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      columnFilters,
    },
  });

  return (
    <>
      <FilterBar table={table} />
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="align-middle text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <TableBodyContent
              columns={columns}
              isLoading={featureFlagsQuery.isLoading}
              table={table}
            />
          </TableBody>
        </Table>
      </div>
    </>
  );
}
