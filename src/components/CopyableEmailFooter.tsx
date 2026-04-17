import { useState } from "react";
import { Check } from "lucide-react";

export function CopyableEmailFooter({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span
      onClick={handleCopy}
      className="relative inline-block cursor-pointer text-sm font-medium text-gray-600 transition-colors select-none group"
      title="点击复制邮箱"
    >
      <span className={`block transition-opacity duration-200 ${copied ? 'opacity-0' : 'opacity-100 group-hover:text-gray-900'}`}>
        邮箱
      </span>
      {copied && (
        <span className="absolute left-0 top-0 w-full h-full flex items-center text-emerald-600 justify-start sm:w-auto sm:whitespace-nowrap translate-x-[110%] sm:translate-x-0 sm:left-auto sm:right-0 sm:translate-y-[-120%] animate-in fade-in duration-200">
          已复制邮箱地址
        </span>
      )}
    </span>
  );
}
