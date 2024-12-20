import Link from "next/link";

function Logo() {
  return (
    <div className="w-sidebar flex justify-center border-r border-editor-divider h-full items-center">
      <Link href="/">
        <h1 className="text-lg group">
          <span className="text-editor-primary font-bold">whoami</span>
          <span className="inline-block w-28 text-center opacity-60 italic group-hover:opacity-100 group-hover:text-editor-secondary group-hover:font-bold transition-all">
            {"  >  "}dpnunez
          </span>
        </h1>
      </Link>
    </div>
  );
}

export { Logo };
