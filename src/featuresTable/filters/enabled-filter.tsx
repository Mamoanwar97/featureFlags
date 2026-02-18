import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Status } from "@/types/feature-flags";

const all = "all";
const STATUSES = [all, "enabled", "disabled"] satisfies Array<
  Status | typeof all
>;

type EnabledFilterProps = {
  value: Status | undefined;
  onChange: (value: Status | undefined) => void;
};

export function EnabledFilter({ value, onChange }: EnabledFilterProps) {
  const displayValue = value === undefined ? all : value;
  const handleOnChange = (value: string) => {
    if (value === all) {
      onChange(undefined);
    } else {
      onChange(value as Status);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            value={displayValue}
            onValueChange={handleOnChange}
          >
            {STATUSES.map((status) => (
              <DropdownMenuRadioItem value={status} key={status}>
                {status}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
