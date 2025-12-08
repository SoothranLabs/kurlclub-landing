type PositionCardProps = {
  title?: string;
  description?: string;
};

const PositionCard = ({ title, description }: PositionCardProps) => {
  return (
    <div className="py-7.5 relative border-b group border-white/20 last:border-0 flex flex-col gap-3 cursor-pointer px-8 sm:px-8 lg:px-12">
      <h1
        className="
          font-medium text-[28px] leading-[109%] relative pl-6
          before:content-[''] before:w-[11px] before:h-[11px]
          before:rounded-full before:bg-primary-green-500
          before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
          transition-all duration-300 group-hover:text-primary-green-500
        "
      >
        {title}
      </h1>

      <p className="text-[16px] text-primary-blue-100">{description}</p>
    </div>
  );
};

export default PositionCard;
