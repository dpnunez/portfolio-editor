import { MainContent, PageTitle } from "@/components";
import { GuestBookList } from "./list";
import { auth } from "@/auth";
import axios from "axios";
import { message } from "@/types/guest-book";

async function Page() {
  const session = await auth();
  const bookData = await axios.get<message[]>(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/guest-book"
  );

  const hasSent = Boolean(
    session &&
      bookData.data.some((message) => message.id === session.user.username)
  );

  return (
    <MainContent className="flex-col items-center py-10">
      <div className="max-w-screen-xl w-full">
        <PageTitle>Guest Book</PageTitle>

        <h2 className="opacity-30">
          {"//"} This is a guest book. Please leave a message below.
        </h2>

        <GuestBookList hasSent={hasSent} initialBookData={bookData.data} />
      </div>
    </MainContent>
  );
}

export default Page;
