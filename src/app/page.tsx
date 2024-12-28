import { Ascii, FadeIn } from "@/components";
import { computerAscii } from "@/constants/ascii";
import { portfolioRepositoryLink } from "@/constants/links";
import Link from "next/link";
import { PrismLight } from "react-syntax-highlighter";

function Page() {
  return (
    <FadeIn className="overflow-hidden flex-1 flex items-center relative">
      <div className="gap-4 flex flex-col max-w-screen-md mx-auto flex-1 px-4 items-center md:items-start">
        <span>Hi all, I&apos;m</span>
        <h1 className="font-extrabold text-3xl md:text-6xl">Daniel Núñez</h1>
        <h2 className="text-lg mb-4 text-center md:text-left">
          <span>{"> "}</span>
          <span>
            Full Stack Developer, specialized in Javascript environment
          </span>
        </h2>

        <Link target="_blank" href={portfolioRepositoryLink}>
          <PrismLight
            className="!bg-transparent hidden md:block"
            language="typescript"
          >
            {`// fell free to access the code of this page in my github\nconst url = "${portfolioRepositoryLink}"`}
          </PrismLight>
        </Link>
      </div>
      <Ascii className="absolute top-0 left-0 opacity-10 max-w-full max-h-full">
        {computerAscii}
      </Ascii>
    </FadeIn>
  );
}

export default Page;
