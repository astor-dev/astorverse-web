import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useIntersectionObserver } from "~hooks/UseIntersectionObserver/UseIntersectionObserver";
import type { Tag } from "~types/post.type";

interface TagCardProps extends Tag {
  className?: string;
  showInitialAnimation?: boolean;
}

const TagCard: React.FC<TagCardProps> = ({
  tag,
  count,
  className,
  showInitialAnimation,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);

  return (
    <div
      ref={cardRef}
      className={` ${
        showInitialAnimation ? "transition-all duration-700 ease-out" : ""
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className}`}
    >
      <motion.a
        href={`/blog/tags/${tag}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="group relative flex flex-col justify-between rounded-lg bg-transparent p-4 transition-shadow delay-200"
      >
        <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-skin-accent">
          {tag}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">{count}개의 포스트</span>
          <FaArrowRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-skin-accent" />
        </div>
      </motion.a>
    </div>
  );
};

export default TagCard;
