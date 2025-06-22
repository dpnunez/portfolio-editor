import {
  FadeIn,
  MainContent,
  PageSubtitle,
  PageTitle,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { SqlHighlight } from "@/components";
import * as motion from "motion/react-client";

function Loading() {
  return (
    <FadeIn key="guest-book">
      <MainContent className="py-10 max-w-screen-xl w-full mx-auto">
        <PageTitle>Guest Book</PageTitle>

        <PageSubtitle>
          {"//"} This is a guest book. Please leave a message below.
        </PageSubtitle>

        <div>
          <div className="mt-8 flex-col">
            {/* Form skeleton */}
            <div className="flex-col md:flex-row flex gap-4">
              <div className="flex-1">
                <div className="h-10 bg-muted animate-pulse rounded-md" />
              </div>
              <div className="md:w-48 md:flex-none flex-1">
                <div className="h-10 bg-muted animate-pulse rounded-md" />
              </div>
            </div>

            <div className="my-8">
              <SqlHighlight>SELECT</SqlHighlight>{" "}
              <em>username, message, created_at</em>{" "}
              <SqlHighlight>FROM</SqlHighlight> <em>guestbook</em>;
            </div>
          </div>

          {/* Table skeleton */}
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="h-4 bg-muted animate-pulse rounded w-20" />
                </TableHead>
                <TableHead>
                  <div className="h-4 bg-muted animate-pulse rounded w-16" />
                </TableHead>
                <TableHead className="text-right">
                  <div className="h-4 bg-muted animate-pulse rounded w-24 ml-auto" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-editor-divider"
                >
                  <td className="p-4">
                    <div className="h-4 bg-muted animate-pulse rounded w-24" />
                  </td>
                  <td className="p-4">
                    <div className="h-4 bg-muted animate-pulse rounded w-32" />
                  </td>
                  <td className="p-4 text-right">
                    <div className="h-4 bg-muted animate-pulse rounded w-20 ml-auto" />
                  </td>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </MainContent>
    </FadeIn>
  );
}

export default Loading;
