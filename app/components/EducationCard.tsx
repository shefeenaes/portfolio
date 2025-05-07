import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  totalCards: number;
};

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  link,
  color,
  totalCards,
}) => {
  const start = i / totalCards;
  const end = (i + 1) / totalCards;

  return (
    <motion.div
      style={{
        backgroundColor: color,
      }}
      className="absolute top-0 left-0 right-0 mx-auto h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
    >
      <h2 className="text-center m-0 text-[28px]">{title}</h2>
      <div className="flex h-full mt-[50px] gap-[50px]">
        <div className="w-[40%] relative top-[10%]">
          <p className="text-[16px] first-letter:text-[28px] first-letter:font-title">
            {description}
          </p>
          <span className="flex items-center gap-1 mt-2">
            <a
              href={link}
              target="_blank"
              className="text-[12px] underline cursor-pointer"
            >
              See more
            </a>
            {/* SVG icon here */}
          </span>
        </div>
        <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
          <Image
            fill
            src={`/${src}`}
            alt="card image"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
