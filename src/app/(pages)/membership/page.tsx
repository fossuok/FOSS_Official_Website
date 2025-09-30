// ./src/app/(pages)/membership/page.tsx
import { redirect } from "next/navigation";

export default function MembershipPage() {
	// Server-side redirect
	redirect("/");

	// This line will never be reached
	return null;
}
