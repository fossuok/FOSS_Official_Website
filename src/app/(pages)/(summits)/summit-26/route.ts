// Cache for the PDF to prevent repeated CDN requests
let cachedPdf: { data: ArrayBuffer; timestamp: number } | null = null;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
	const recUrl = process.env.NEXT_PUBLIC_CDN;

	if (!recUrl) {
		return new Response("CDN URL is not configured.", { status: 500 });
	}

	// Check if we have a valid cached version
	const now = Date.now();
	if (cachedPdf && now - cachedPdf.timestamp < CACHE_DURATION) {
		const headers = new Headers();
		headers.set("Content-Type", "application/pdf");
		headers.set(
			"Content-Disposition",
			'inline; filename="sponsorship-proposal.pdf"',
		);
		headers.set("Cache-Control", "public, max-age=3600");
		return new Response(cachedPdf.data, {
			status: 200,
			headers,
		});
	}

	try {
		const pdfResponse = await fetch(
			`${recUrl}/assets/summit-26/Sponsorship-Proposal-Developer-Summit-26.pdf`,
			{
				headers: {
					"User-Agent": "fossuok-website/1.0",
				},
			},
		);

		if (!pdfResponse.ok || !pdfResponse.body) {
			return new Response("Unable to load sponsorship proposal PDF.", {
				status: pdfResponse.status || 502,
			});
		}

		// Cache the response as ArrayBuffer
		const buffer = await pdfResponse.arrayBuffer();
		cachedPdf = { data: buffer, timestamp: now };

		const headers = new Headers();
		headers.set("Content-Type", "application/pdf");
		headers.set(
			"Content-Disposition",
			'inline; filename="sponsorship-proposal.pdf"',
		);
		headers.set("Cache-Control", "public, max-age=3600");

		return new Response(buffer, {
			status: 200,
			headers,
		});
	} catch (error) {
		// If CDN fetch fails but we have a cached version, serve it anyway
		if (cachedPdf) {
			const headers = new Headers();
			headers.set("Content-Type", "application/pdf");
			headers.set(
				"Content-Disposition",
				'inline; filename="sponsorship-proposal.pdf"',
			);
			return new Response(cachedPdf.data, {
				status: 200,
				headers,
			});
		}

		return new Response("Failed to fetch PDF from CDN.", { status: 502 });
	}
}
