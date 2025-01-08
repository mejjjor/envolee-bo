"use server";

import { routes } from "@/routes";
import { redirect } from "next/navigation";

export const submitForm = async (formData: FormData) => {
  console.log("dsykqsjldsqdkqsl");
  console.log("dsykqsjldsqdkqsl", formData.entries());

  redirect(routes.contactSuccess);
};
