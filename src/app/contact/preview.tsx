"use client";

import { FileViewer } from "@/components";
import { useFormContext } from "react-hook-form";
import { SiTypescript } from "react-icons/si";

function ContactRequestPreview() {
  const form = useFormContext();
  const [name, email, message] = form.watch(["name", "email", "message"]);

  return (
    <div className="!bg-editor-background-highlight py-4 rounded-2xl">
      <span className="italic opacity-50 flex gap-2 items-center mx-6 pb-4 border-b border-editor-divider">
        <SiTypescript />
        /src/app/contact/form.tsx
      </span>
      <FileViewer
        code={`function ContactForm() {
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
                            }
                            `}
      />
    </div>
  );
}

export { ContactRequestPreview };
