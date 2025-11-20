"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

const copy = {
  tagline: "-A Google Partner Agency-",
  heroTitle: "Making organization Grow and Rise towards Success with ease!",
  heroParagraphs: [
    "Today's expanded internet access has fueled the rise of numerous digital channels. It has changed the way people sell and purchase, and offline marketing is no longer as successful as it once was. So here is Digital Nawab a digital marketing company in lucknow to helping your business to grow.The primary method of reaching out to an audience or clients has changed from offline to online. Most advertisers today use new platforms, software, and strategies to communicate with their consumers, which is known as Digital Marketing Services."  ],
  feature: {
    title: "No. 1 Digital Marketing Company in Lucknow",
    paragraphs: [
      "Today's expanded internet access has fueled the rise of numerous digital channels. It has changed the way people sell and purchase, and offline marketing is no longer as successful as it once was. So here is Digital Nawab a digital marketing company in lucknow to helping your business to grow.",
      "The primary method of reaching out to an audience or clients has changed from offline to online. Most advertisers today use new platforms, software, and strategies to communicate with their consumers, which is known as Digital Marketing Services.",
    ],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
  },
};

export default function StatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.12),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.12),transparent_70%)]" />
        <div className="absolute -left-16 top-1/4 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-0 bottom-12 h-80 w-80 rounded-full bg-rose-100/60 blur-[140px]" />
        <BackgroundBeams className="opacity-30 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto container p-4 lg:p-0">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="w-fit border-slate-200 bg-white/80 text-[11px] uppercase tracking-[0.3em] text-slate-600">
                {copy.tagline}
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl xl:text-5xl 2xl:text-6xl">
                {copy.heroTitle}
              </h2>
            </div>

            <div className="space-y-5">
              {copy.heroParagraphs.map((paragraph) => (
                <div
                  key={paragraph}
                  className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 text-base leading-relaxed text-slate-700 shadow-[0_25px_65px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  {paragraph}
                </div>
              ))}
            </div>

            {/* <div className="flex flex-wrap items-center gap-4">
              <Link href="/about-us">
                <Button className="rounded-full bg-slate-900 px-8 py-6 text-base font-semibold text-white shadow-[0_15px_40px_rgba(15,23,42,0.25)] transition-all hover:scale-[1.02]">
                  Know More
                </Button>
              </Link>
              <button
                type="button"
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/5">
                  <Play className="h-5 w-5 text-slate-900" />
                </span>
                {copy.tagline}
              </button>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.15)]">
              <div className="relative h-[480px] w-full">
                <Image
                  fill
                  priority={false}
                  src={copy.feature.image}
                  alt="Digital Nawab team collaboration"
                  className="object-cover"
                  sizes="(min-width: 1024px) 550px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-slate-900/10 to-transparent" />
              </div>
              <div className="absolute inset-x-8 bottom-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                  {copy.tagline}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  {copy.feature.title}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
