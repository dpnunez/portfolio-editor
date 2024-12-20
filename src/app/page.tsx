import { Sidebar } from "@/components";

function Page() {
  return (
    <div className="flex flex-1">
      <Sidebar>antialiased</Sidebar>
      <h1>Home content</h1>
    </div>
  );
}

export default Page;
