"use client";

import { FileViewer } from "@/components";
import { cn } from "@/utils/styles";
import { useFormContext } from "react-hook-form";
import { SiTypescript } from "react-icons/si";

interface ContactRequestPreviewProps {
  className?: string;
}

function ContactRequestPreview({ className }: ContactRequestPreviewProps) {
  const form = useFormContext();
  const [name, email, message] = form.watch(["name", "email", "message"]);

  return (
    <div
      className={cn(
        "!bg-editor-background-highlight py-4 rounded-2xl max-h-full relative flex flex-col",
        className
      )}
    >
      <span className="italic opacity-50 flex gap-2 items-center mx-6 pb-4 border-b border-editor-divider">
        <SiTypescript />
        /src/app/contact/form.tsx
      </span>
      <div className="overflow-auto flex-1">
        <FileViewer code={generateFakeFile({ name, email, message })} />
      </div>
    </div>
  );
}

interface generateFakeFileProps {
  name: string;
  email: string;
  message: string;
}

const generateFakeFile = ({
  name,
  email,
  message,
}: generateFakeFileProps) => `function ContactForm() {
		const form = useForm<Schema>();

		const onSubmit = async (data: Schema) => {
			try {
				await axios.post('/api/contact', {
					name: "${name}",
					email: "${email}",
					message: "${message.replace(/\n/g, " ")}",
				})

				alert("Message sent!")
			} catch (error) {
				// Press F to my form (and send a sentry report)
			}
		}

		return (
			<form onSubmit={form.handleSubmit(onSubmit)}>
				{/* inputs */}
				<Button type="submit">Send</Button>
			</form>
		)
}`;

export { ContactRequestPreview };
