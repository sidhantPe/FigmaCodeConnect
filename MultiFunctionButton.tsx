import { Plus, ChevronDown } from "lucide-react";

interface MultifunctionButtonProps {
  text?: string;
  onButtonClick?: () => void;
  onDropdownClick?: () => void;
  className?: string;
}

export default function MultifunctionButton({
  text = "Button",
  onButtonClick,
  onDropdownClick,
  className = "",
}: MultifunctionButtonProps) {
  return (
    <div className={`inline-flex h-[50px] items-start ${className}`}>
      {/* Main Button */}
      <button
        onClick={onButtonClick}
        className="flex h-[50px] px-5 py-2.5 justify-center items-center gap-2.5 rounded-l-[5px] bg-pe-primary hover:bg-[#1a6ba8] transition-colors"
      >
        <span className="text-white text-right font-openSans text-[20px] font-normal leading-normal">
          {text}
        </span>
        <div className="flex w-5 h-5 justify-center items-center">
          <Plus className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
        </div>
      </button>

      {/* Divider */}
      <div className="w-[2px] h-[50px] bg-white" />

      {/* Dropdown Arrow */}
      <button
        onClick={onDropdownClick}
        className="flex w-[50px] h-[50px] p-2.5 justify-center items-center gap-2.5 rounded-r-[5px] bg-pe-primary hover:bg-[#1a6ba8] transition-colors"
      >
        <div className="flex w-5 h-5 justify-center items-center flex-shrink-0">
          <ChevronDown className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
      </button>
    </div>
  );
}
