import { NextResponse } from "next/server";

const GITHUB_RELEASES_API =
  "https://api.github.com/repos/moldable-ai/moldable/releases/latest";

// Map platform slugs to asset filename patterns
const PLATFORM_PATTERNS: Record<string, RegExp> = {
  "mac-arm64": /aarch64\.dmg$/,
  "mac-intel": /x64\.dmg$/,
  windows: /\.exe$/,
  linux: /\.AppImage$/,
};

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ platform: string }> }
) {
  const { platform } = await params;

  const pattern = PLATFORM_PATTERNS[platform];
  if (!pattern) {
    return NextResponse.json(
      {
        error: `Unknown platform "${platform}". Valid options: ${Object.keys(PLATFORM_PATTERNS).join(", ")}`,
      },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(GITHUB_RELEASES_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const release: GitHubRelease = await res.json();
    const asset = release.assets.find((a) => pattern.test(a.name));

    if (!asset) {
      // Platform not available in this release, redirect to releases page
      return NextResponse.redirect(
        "https://github.com/moldable-ai/moldable/releases/latest"
      );
    }

    return NextResponse.redirect(asset.browser_download_url);
  } catch (error) {
    console.error("Failed to fetch latest release:", error);
    // Fallback to releases page on any error
    return NextResponse.redirect(
      "https://github.com/moldable-ai/moldable/releases/latest"
    );
  }
}
