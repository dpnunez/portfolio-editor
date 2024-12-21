"use client";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("./clientView"), {
  ssr: false,
});

export default function Page() {
  return <Projects />;
}
