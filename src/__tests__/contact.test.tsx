import { contactSchema } from "@/validations";
import { describe, expect, it } from "vitest";

describe("Contact validation schema", () => {
  it("should return an error if the name is empty", () => {
    const { error } = contactSchema.safeParse({
      name: "",
      email: "",
      message: "",
    });

    expect(error).toBeDefined();
  });

  it("should return an error if the email is empty", () => {
    const { error } = contactSchema.safeParse({
      name: "Daniel",
      email: "",
      message: "",
    });
    expect(error).toBeDefined();
  });

  it("should return an error if the email is invalid", () => {
    const { error } = contactSchema.safeParse({
      name: "Daniel",
      email: "daniel.portonunez@gmail.com",
      message: "",
    });
    expect(error).toBeDefined();
  });

  it("should return an error if the message is empty", () => {
    const { error } = contactSchema.safeParse({
      name: "Daniel",
      email: "",
      message: "",
    });
    expect(error).toBeDefined();
  });

  it("should return an error if the message is too short", () => {
    const { error } = contactSchema.safeParse({
      name: "Daniel",
      email: "daniel.portonunez@gmail.com",
      message: "Hi",
    });

    expect(error).toBeDefined();
  });
});
