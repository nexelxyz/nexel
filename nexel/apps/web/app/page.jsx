"use client";

import { useEffect } from "react";
import Hero from "./components/sections/Hero.jsx";
import Problem from "./components/sections/Problem.jsx";
import Product from "./components/sections/Product.jsx";
import Analyzer from "./components/sections/Analyzer.jsx";
import IdentityLayer from "./components/sections/IdentityLayer.jsx";
import Research from "./components/sections/Research.jsx";
import CTA from "./components/sections/CTA.jsx";

const NAV_OFFSET = 80;

function getAbsoluteOffsetTop(el) {
  let y = 0;
  while (el) {
    y += el.offsetTop;
    el = el.offsetParent;
  }
  return y;
}

export default function Home() {
  useEffect(() => {
    // ----- Reveal on scroll (identical to the live site) -----
    const sections = Array.from(document.querySelectorAll("section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    // ----- Smooth scroll for in-page anchors (offset for fixed nav) -----
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      if (
        target.classList.contains("reveal") &&
        !target.classList.contains("visible")
      ) {
        target.classList.add("visible");
      }
      const top = getAbsoluteOffsetTop(target) - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };
    anchors.forEach((a) => a.addEventListener("click", onClick));

    // ----- On-load hash scroll -----
    if (location.hash) {
      const t = setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          const top =
            target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
      return () => {
        clearTimeout(t);
        observer.disconnect();
        anchors.forEach((a) => a.removeEventListener("click", onClick));
      };
    }

    return () => {
      observer.disconnect();
      anchors.forEach((a) => a.removeEventListener("click", onClick));
    };
  }, []);

  return (
    <main>
      <Hero />
      <Problem />
      <Product />
      <Analyzer />
      <IdentityLayer />
      <Research />
      <CTA />
    </main>
  );
}
