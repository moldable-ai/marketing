import { ImageResponse } from "next/og";

// Standard OG image dimensions
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Truncate text to a specific length while preserving words
function truncateText(text: string, maxLength: number = 250): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength).split(" ").slice(0, -1).join(" ");
  return `${truncated}...`;
}

type OpenGraphImageProps = {
  title: string;
  description?: string | null;
  /** Optional badge/label shown above the title */
  badge?: string | null;
  /** Show the text logo alongside the mark */
  showWordmark?: boolean;
};

// Colors from globals.css (dark mode)
const colors = {
  background: "#2d2d2d", // Dark gray similar to banner
  foreground: "#ffffff", // White
  primary: "#e67322", // Moldable orange
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://moldable.sh";

export async function OpenGraphImage({
  title,
  description,
  showWordmark = false,
}: OpenGraphImageProps): Promise<ImageResponse> {
  // Fetch Geist font
  const [geistBold, geistMedium] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-700-normal.ttf"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.ttf"
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: colors.background,
        fontFamily: "Geist, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern - right side only like stax */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${APP_URL}/og-pattern.png`}
        alt=""
        width={800}
        height={630}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 800,
          height: 630,
          objectFit: "cover",
          objectPosition: "right",
        }}
      />

      {/* Content on left side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          padding: "48px 64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo at top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${APP_URL}/logo.svg`} alt="" width={96} height={96} />
          {showWordmark && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`${APP_URL}/logo-text.svg`}
              alt=""
              width={240}
              height={48}
              style={{
                display: "block",
                filter: "invert(1)",
                transform: "translate(4px, -4px)",
              }}
            />
          )}
        </div>

        {/* Title and description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          {/* Title in white */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: colors.foreground,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "90%",
            }}
          >
            {truncateText(title, 50)}
          </div>

          {/* Description in orange */}
          {description && (
            <div
              style={{
                fontSize: "72px",
                fontWeight: 700,
                fontStyle: "italic",
                color: colors.primary,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: "90%",
              }}
            >
              {truncateText(description, 50)}
            </div>
          )}
        </div>

        {/* Empty div for spacing */}
        <div style={{ height: 1 }} />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Geist",
          data: geistMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
