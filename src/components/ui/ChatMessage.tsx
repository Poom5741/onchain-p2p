import React from "react";
import Image from "next/image";

interface ChatMessageProps {
  avatarSrc?: string;
  isCurrentUser?: boolean;
  message: string;
  timestamp: string;
}

export default function ChatMessage({
  avatarSrc,
  isCurrentUser = false,
  message,
  timestamp,
}: ChatMessageProps) {
  if (isCurrentUser) {
    return (
      <div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto text-right">
        <div className="space-y-1">
          <div className="bg-primary p-4 rounded-2xl rounded-tr-none text-on-primary-container">
            <p className="text-sm leading-relaxed font-medium">{message}</p>
          </div>
          <span className="text-[10px] text-on-surface-variant font-medium">{timestamp}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 max-w-[85%]">
      {avatarSrc && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
          <Image
            width={32}
            height={32}
            alt="User Avatar"
            className="w-full h-full object-cover"
            src={avatarSrc}
          />
        </div>
      )}
      <div className="space-y-1">
        <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none">
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span className="text-[10px] text-on-surface-variant font-medium">{timestamp}</span>
      </div>
    </div>
  );
}
