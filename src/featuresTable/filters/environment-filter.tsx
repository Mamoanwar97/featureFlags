import type { Environment } from "@/types/feature-flags";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const environments = [
  "production",
  "staging",
  "development",
] satisfies Array<Environment>;

type EnvFilterProps = {
  value: Array<Environment>;
  onChange: (value: Environment, checked: boolean) => void;
};

export const EnvFilter = ({ value, onChange }: EnvFilterProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Environments</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          {environments.map((env) => (
            <DropdownMenuCheckboxItem
              key={env}
              checked={value.includes(env)}
              onCheckedChange={(checked) => onChange(env, checked)}
            >
              {env}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
