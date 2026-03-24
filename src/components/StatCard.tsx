import type { ReactNode } from "react";
type StatCardProps = {
  label: string;
  value: number | string;
  subtitle?: string;
  icon?: ReactNode;
  border?: string;
  valueColor?: string;
};

const StatCard = ({
  label,
  value,
  subtitle,
  icon,
  border,
  valueColor,
}: StatCardProps) => {
  return (
    <div className={`${border} rounded-lg bg-sidebar p-4  h-full w-full`}>
      <div className="space-y-2 font-mono text-gray-100 ">
        <div className="uppercase  text-lg">{label}</div>
          {icon && <span>{icon}</span>}
        <div className={`uppercase  ${valueColor}  text-3xl `}>{value}</div>
        <div className="text-sm ">{subtitle}</div>
      
      </div>
    </div>
  );
};
export default StatCard;
