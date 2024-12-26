import { FadeIn, MainContent, PageTitle } from "@/components";
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
    session?.user &&
      bookData.data.some((message) => message.id === session.user.username)
  );

  return (
    <FadeIn>
      <MainContent className="py-10 max-w-screen-xl w-full mx-auto">
        <PageTitle>Guest Book</PageTitle>

        <h2 className="opacity-30">
          {"//"} This is a guest book. Please leave a message below.
        </h2>

        <GuestBookList hasSent={hasSent} initialBookData={bookData.data} />
      </MainContent>
    </FadeIn>
  );
}

export default Page;
