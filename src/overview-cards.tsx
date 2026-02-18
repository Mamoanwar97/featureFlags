import { listFlagsQuery } from "./queries/list-flags-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Environment } from "./types/feature-flags";

const ENV_CONFIG: Record<Environment, string> = {
  production: "bg-orange-400",
  staging: "bg-violet-400",
  development: "bg-blue-400",
};

export const OverviewCards = () => {
  const featureFlags = listFlagsQuery();
  const data = featureFlags.data?.featureFlags ?? [];

  const enabledCount = data.filter((f) => f.status === "enabled").length;
  const enabledPct =
    data.length > 0 ? Math.round((enabledCount / data.length) * 100) : 0;

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {/* Total */}
      <Card className="border-0 py-0 gap-0 bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-md">
        <CardContent className="p-5">
          <p className="text-xs font-medium opacity-75 uppercase tracking-wide mb-1">
            Total Flags
          </p>
          <p className="text-3xl font-bold tracking-tight">
            {featureFlags.isLoading ? "—" : data.length}
          </p>
          <p className="text-xs opacity-60 mt-1.5">across all environments</p>
        </CardContent>
      </Card>

      {/* Enabled */}
      <Card className="border-0 py-0 gap-0 bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md">
        <CardContent className="p-5">
          <p className="text-xs font-medium opacity-75 uppercase tracking-wide mb-1">
            Enabled
          </p>
          <p className="text-3xl font-bold tracking-tight">
            {featureFlags.isLoading ? "—" : enabledCount}
          </p>
          <p className="text-xs opacity-60 mt-1.5">{enabledPct}% of total</p>
        </CardContent>
      </Card>

      {/* Disabled */}
      <Card className="border-0 py-0 gap-0 bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md">
        <CardContent className="p-5">
          <p className="text-xs font-medium opacity-75 uppercase tracking-wide mb-1">
            Disabled
          </p>
          <p className="text-3xl font-bold tracking-tight">
            {featureFlags.isLoading ? "—" : data.length - enabledCount}
          </p>
          <p className="text-xs opacity-60 mt-1.5">
            {100 - enabledPct}% of total
          </p>
        </CardContent>
      </Card>

      {/* Environment breakdown */}
      <Card className="py-0 gap-0">
        <CardHeader className="px-5 pt-5 pb-0">
          <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            By Environment
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-3">
          {featureFlags.isLoading ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-3 bg-gray-100 rounded animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-2.5">
              {(Object.keys(ENV_CONFIG) as Environment[]).map((env) => {
                const count = data.filter((f) => f.environment === env).length;
                const pct =
                  data.length > 0 ? Math.round((count / data.length) * 100) : 0;
                const barCls = ENV_CONFIG[env];
                return (
                  <div key={env} className="flex items-center gap-2">
                    <div className="text-xs text-muted-foreground w-8 shrink-0">
                      {env.slice(0, 4).toUpperCase()}
                    </div>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barCls}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="text-xs font-semibold text-gray-600 w-4 text-right">
                      {count}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
