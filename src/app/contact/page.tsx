import { FadeIn, MainContent, PageSubtitle, PageTitle } from "@/components";
import { ContactForm } from "./form";

function Page() {
  return (
    <FadeIn>
      <MainContent className="max-w-screen-xl mx-auto h-full">
        <PageTitle>Contact</PageTitle>
        <PageSubtitle>
          {"//"} This is a contact page. Please fill out the form below.
        </PageSubtitle>
        <ContactForm />
      </MainContent>
    </FadeIn>
  );
}

export default Page;
