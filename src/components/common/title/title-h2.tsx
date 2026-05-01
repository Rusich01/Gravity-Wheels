import type { ReactNode } from "react";

type TitleH2Props = {
  children: ReactNode;
};

const TitleH2 = ({ children }: TitleH2Props) => {
  return (
    <div className="flex items-center gap-4 px-10 ">
      <span className="flex-1 h-px bg-[#b7b7b7]"></span>
      <h2 className="text-lg font-semibold text-center">{children}</h2>
      <span className="flex-1 h-px bg-[#b7b7b7]"></span>
    </div>
  );
};

export default TitleH2;
