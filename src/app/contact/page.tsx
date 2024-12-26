import { FadeIn, MainContent, PageTitle } from "@/components";

function Page() {
  return (
    <FadeIn>
      <MainContent className="max-w-screen-xl mx-auto py-10">
        <PageTitle>Contact</PageTitle>
        <h2 className="opacity-30">
          {"//"} This is a contact page. Please leave a message below.
        </h2>
      </MainContent>
    </FadeIn>
  );
}

export default Page;
