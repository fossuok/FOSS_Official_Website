"use client";
const imgUrl = process.env.NEXT_PUBLIC_CDN;
import Image from "next/image";
import { Grid, Box } from "@mantine/core";

export default function ImgGrid() {
  return (
    <Grid>
      {["img1", "Frame0", "Frame2", "img3", "img7", "img6", "Frame3"].map(
        (img, index) => (
          <Grid.Col
            key={index}
            span={{
              base: 12,
              xs:
                img === "Frame0" || img === "Frame2"
                  ? 8
                  : img === "Frame3"
                  ? 6
                  : img === "img7" || img === "img6"
                  ? 3
                  : 4,
            }}
            visibleFrom={
              ["img3", "img7", "Frame3"].includes(img) ? "xs" : undefined
            }
          >
            <Box
              style={{
                position: "relative",
                width: "100%",
                height: 140,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={`${imgUrl}/images/summit25/${img}.webp`}
                alt={img}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
        )
      )}
    </Grid>
  );
}
