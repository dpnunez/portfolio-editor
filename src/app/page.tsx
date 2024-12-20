import { Ascii, FadeIn } from "@/components";
import { computerAscii } from "@/constants/ascii";
import { portfolioRepositoryLink } from "@/constants/links";
import Link from "next/link";
import { PrismLight } from "react-syntax-highlighter";

function Page() {
  return (
    <div className="overflow-hidden flex-1 flex items-center relative">
      <FadeIn className="gap-4 flex flex-col max-w-screen-md mx-auto flex-1">
        <span>Hi all, I&apos;m</span>
        <h1 className="font-extrabold text-3xl md:text-6xl">
          <span>Daniel Núñez</span>
        </h1>
        <h2 className="text-lg mb-4">
          <span>{"> "}</span>
          <span>
            Full Stack Developer, specialized in Javascript environment
          </span>
        </h2>

        <Link target="_blank" href={portfolioRepositoryLink}>
          <PrismLight
            className="!bg-transparent hidden md:block"
            language="javascript"
          >
            {`// fell free to access the code of this page in my github\nconst url = "${portfolioRepositoryLink}"`}
          </PrismLight>
        </Link>
      </FadeIn>
      <Ascii className="absolute top-0 left-0 opacity-5 max-w-full max-h-full">
        {computerAscii}
      </Ascii>
    </div>
  );
}

export default Page;
