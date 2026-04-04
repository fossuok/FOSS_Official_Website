export async function GET() {
	const recUrl = process.env.NEXT_PUBLIC_CDN;

	if (!recUrl) {
		return new Response("CDN URL is not configured.", { status: 500 });
	}

	const pdfResponse = await fetch(
		`${recUrl}/assets/summit-26/Sponsorship-Proposal-Developer-Summit-26.pdf`,
	);

	if (!pdfResponse.ok || !pdfResponse.body) {
		return new Response("Unable to load sponsorship proposal PDF.", {
			status: pdfResponse.status || 502,
		});
	}

	const headers = new Headers(pdfResponse.headers);
	headers.set("Content-Type", "application/pdf");
	headers.set(
		"Content-Disposition",
		'inline; filename="sponsorship-proposal.pdf"',
	);

	return new Response(pdfResponse.body, {
		status: pdfResponse.status,
		headers,
	});
}
