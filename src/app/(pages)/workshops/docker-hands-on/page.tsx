import { redirect } from "next/navigation";

export const metadata = {
	title: "Redirecting...",
};

export default function About() {
	// Redirect user to the Google Form
	redirect("https://forms.gle/9c9zXC6yT1Aorx5m8");
}
