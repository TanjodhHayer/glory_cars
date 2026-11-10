import { redirect } from "next/navigation";
import { PORTAL_URL } from "@/lib/site";
export default function Page() {
  redirect(PORTAL_URL + "/signup");
}
