"use client";

import { useRef } from "react";
import { postsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "motion/react";

type BlogPostProps = (typeof postsData)[keyof typeof postsData][number];

export default function BlogPost({
  title,
  description,
  platform,
  platformIcon,
  tags,
  publishedDate,
  url,
  readTime,
}: BlogPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <article className="bg-gray-100 max-w-2xl border border-black/5 rounded-lg overflow-hidden p-5 sm:p-7 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          {/* Platform Badge */}
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 dark:text-white/70">
            <span className="flex items-center gap-1">
              {platformIcon}
              {platform}
            </span>
            <span>•</span>
            <time>{publishedDate}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-4">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/70 px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* External Link Indicator */}
          <div className="absolute top-5 right-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </article>
      </motion.div>
    </a>
  );
}