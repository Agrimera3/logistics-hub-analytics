interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
}

export function MetricsCard({ title, value, change, icon }: MetricsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold">{value}</p>
          {change && (
            <p className="text-sm text-green-500">
              {change}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}