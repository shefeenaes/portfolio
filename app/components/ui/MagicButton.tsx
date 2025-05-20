import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const MagicButton = ({
  title,

  handleClick,
  otherClasses,
}: {
  title: React.ReactNode;

  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-primary px-7 text-sm font-medium text-primary dark:text-white hover:dark:bg-slate-800 backdrop-blur-3xl gap-3 ${otherClasses}`}
        >
          {title} <FaLocationArrow />
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
