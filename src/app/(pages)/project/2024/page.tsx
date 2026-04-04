import { redirect } from "next/navigation";

export const metadata = {
	title: "Redirecting...",
};

export default function Summit24Page() {
	redirect("/summit-24");
}
