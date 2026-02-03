import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Hirachu";
    const subtitle = searchParams.get("subtitle") || "Handcrafted Japanese Dolls";
    const type = searchParams.get("type") || "default"; // default, product

    // Load Hachi Maru Pop font for title
    const hachiFont = await loadGoogleFont("Hachi+Maru+Pop", title);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#FAFAFA",
            padding: "80px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {/* Background pattern - minimal grid */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.3,
            }}
          />

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "40px",
                  backgroundColor: "#000",
                }}
              />
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  color: "#000",
                  fontFamily: "Hachi Maru Pop",
                }}
              >
                Hirachu
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "900px",
              }}
            >
              <div
                style={{
                  fontSize: type === "product" ? "64px" : "80px",
                  fontWeight: "400",
                  lineHeight: 1.15,
                  color: "#000",
                  letterSpacing: "-0.01em",
                  fontFamily: "Hachi Maru Pop",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "300",
                  color: "#737373",
                  letterSpacing: "0.02em",
                  fontFamily: "system-ui",
                }}
              >
                {subtitle}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-end",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: "18px",
                color: "#a3a3a3",
                fontWeight: "300",
                letterSpacing: "0.1em",
                fontFamily: "system-ui",
              }}
            >
              TOKYO EDITORIAL
            </div>
            <div
              style={{
                width: "200px",
                height: "2px",
                backgroundColor: "#000",
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Hachi Maru Pop",
            data: hachiFont,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(e.message);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
