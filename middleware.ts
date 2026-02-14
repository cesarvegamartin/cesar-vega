import { type NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "@lib/i18n";

function getPreferredLocale(request: NextRequest): string {
	const acceptLanguage = request.headers.get("accept-language");
	if (!acceptLanguage) return defaultLocale;

	const preferred = acceptLanguage
		.split(",")
		.map((part) => {
			const [lang, q] = part.trim().split(";q=");
			return { lang: lang.split("-")[0].toLowerCase(), q: Number(q) || 1 };
		})
		.sort((a, b) => b.q - a.q)
		.find((entry) => isLocale(entry.lang));

	return preferred?.lang ?? defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	/* Skip files, api routes, and _next internals */
	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	/* Already has a valid locale prefix */
	const firstSegment = pathname.split("/")[1];
	if (isLocale(firstSegment)) {
		return NextResponse.next();
	}

	/* Redirect to the best locale */
	const locale = getPreferredLocale(request);
	const url = request.nextUrl.clone();
	url.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(url);
}

export const config = {
	matcher: ["/((?!_next|api|images|favicon\\.ico).*)"],
};
