import Image from "next/image";
import { Edit2 } from "lucide-react";

interface AdCardProps {
  assetName: string;
  assetDetails: string;
  assetSrc: string;
  price: string;
  priceChangeStr?: string;
  priceChangeClass?: string;
  isOnline: boolean;
  onEdit?: () => void;
  onToggleStatus?: () => void;
}

export default function AdCard({
  assetName,
  assetDetails,
  assetSrc,
  price,
  priceChangeStr,
  priceChangeClass,
  isOnline,
  onEdit,
  onToggleStatus,
}: AdCardProps) {
  return (
    <div className="bg-surface-container p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between hover:bg-surface-container-high transition-all group gap-4">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-[#24252d] flex items-center justify-center shrink-0">
          <Image width={40} height={40} alt={assetName} src={assetSrc} />
        </div>
        <div>
          <h4 className="font-bold text-lg mb-0.5">{assetName}</h4>
          <p className="text-sm text-on-surface-variant">{assetDetails}</p>
        </div>
      </div>
      <div className="text-left sm:text-right flex items-center justify-between sm:justify-end gap-10">
        <div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">
            Current Price
          </p>
          <p className="text-xl font-extrabold text-on-surface">
            {price}{" "}
            {priceChangeStr && (
              <span className={`text-xs ml-1 ${priceChangeClass}`}>{priceChangeStr}</span>
            )}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              checked={isOnline}
              onChange={onToggleStatus}
              className="sr-only peer"
              type="checkbox"
            />
            <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            <span
              className={`ms-3 text-xs font-bold uppercase ${
                isOnline ? "text-secondary" : "text-on-surface-variant"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </span>
          </label>
          <button
            onClick={onEdit}
            className="p-2 text-on-surface-variant hover:text-on-surface"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
