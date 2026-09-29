import { NextRequest, NextResponse } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL, WEB_APP_URL } from "@/lib/appLinks";

export function GET(request: NextRequest) {
	const ua = request.headers.get("user-agent") ?? "";

	if (/iPhone|iPad|iPod/i.test(ua)) {
		return NextResponse.redirect(APP_STORE_URL);
	}
	if (/Android/i.test(ua)) {
		return NextResponse.redirect(PLAY_STORE_URL);
	}

	return NextResponse.redirect(WEB_APP_URL);
}
