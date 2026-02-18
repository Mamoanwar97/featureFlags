import type { Environment, FeatureFlag, Status } from "@/types/feature-flags";
import { EnabledFilter } from "./enabled-filter";
import { EnvFilter } from "./environment-filter";
import type { Table } from "@tanstack/react-table";

type FilterBarProps = {
  table: Table<FeatureFlag>;
};

export const FilterBar = ({ table }: FilterBarProps) => {
  const envFilterValue = (table.getColumn("environment")?.getFilterValue() ??
    []) as Environment[];

  const handleEnvChange = (value: Environment, checked: boolean) => {
    let answer = [];
    if (checked) {
      answer = [...envFilterValue, value];
    } else {
      answer = envFilterValue.filter((env: Environment) => env !== value);
    }
    table.getColumn("environment")?.setFilterValue(answer);
  };

  const enabledFilterValue = table
    .getColumn("status")
    ?.getFilterValue() as Status;

  const handleEnabledChange = (value: Status | undefined) => {
    table.getColumn("status")?.setFilterValue(value);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <EnabledFilter
        value={enabledFilterValue}
        onChange={handleEnabledChange}
      />
      <EnvFilter value={envFilterValue} onChange={handleEnvChange} />
    </div>
  );
};

// value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
// onChange={(event) =>
//
// }
