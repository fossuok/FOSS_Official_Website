import { redirect } from "next/navigation";

export const metadata = {
	title: "Redirecting...",
};

export default function Summit25Page() {
	redirect("/summit-25");
}
