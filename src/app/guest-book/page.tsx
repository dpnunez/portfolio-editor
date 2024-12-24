import { MainContent, PageTitle } from "@/components";
import { GuestBookList } from "./list";

async function Page() {
  return (
    <MainContent className="flex-col items-center py-10">
      <div className="max-w-screen-xl w-full">
        <PageTitle>Guest Book</PageTitle>

        <h2 className="opacity-30">
          {"//"} This is a guest book. Please leave a message below.
        </h2>

        <GuestBookList />
      </div>
    </MainContent>
  );
}

export default Page;
