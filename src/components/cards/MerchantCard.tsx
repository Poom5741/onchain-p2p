import Image from "next/image";
import { Star } from "lucide-react";

interface MerchantCardProps {
  name: string;
  avatarSrc: string;
  avatarBgClass?: string;
  rating: number;
  tradesCount: string | number;
  speed: string;
  onViewProfile?: () => void;
}

export default function MerchantCard({
  name,
  avatarSrc,
  avatarBgClass = "bg-primary/20",
  rating,
  tradesCount,
  speed,
  onViewProfile,
}: MerchantCardProps) {
  return (
    <div className="bg-surface-container p-6 rounded-xl space-y-4 hover:translate-y-[-4px] transition-all duration-300">
      <div className="flex items-center gap-3">
        <Image
          width={48}
          height={48}
          alt={name}
          className={`rounded-full ${avatarBgClass}`}
          src={avatarSrc}
        />
        <div>
          <p className="font-bold font-headline">{name}</p>
          <div className="flex items-center gap-1">
            <Star className="text-secondary w-3 h-3 fill-secondary" />
            <span className="text-xs font-bold text-secondary">{rating}%</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-surface-container-low p-3 rounded-lg text-center">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase">TRADES</p>
          <p className="text-sm font-bold">{tradesCount}</p>
        </div>
        <div className="bg-surface-container-low p-3 rounded-lg text-center">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase">SPEED</p>
          <p className="text-sm font-bold">{speed}</p>
        </div>
      </div>
      <button
        onClick={onViewProfile}
        className="w-full py-2 bg-surface-container-highest rounded-full text-xs font-bold hover:bg-primary/20 hover:text-primary transition-all"
      >
        View Profile
      </button>
    </div>
  );
}
