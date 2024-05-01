/** @jsxImportSource react */

"use client";
import React, { useRef } from 'react';
import ScrollArrow from './ScrollArrow';

export default function MainContent() {
  const articleRef = useRef(null);

  const scrollToArticle = () => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full overflow-hidden">
        <div className="h-[580px] bg-parallax bg-cover bg-fixed"></div>
        <ScrollArrow onClick={scrollToArticle} />
      </section>
      <article ref={articleRef} className="w-full max-w-4xl p-5 text-lg my-32 relative z-20">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <section className="relative w-full overflow-hidden">
        <div className="h-[580px] bg-parallax bg-cover bg-fixed"></div>
      </section>
      <article className="w-full max-w-4xl p-5 text-lg my-32 relative z-20">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
  );
}