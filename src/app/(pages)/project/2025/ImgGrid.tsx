"use client";
const imgUrl = process.env.NEXT_PUBLIC_CDN;
import { Grid, Skeleton, BackgroundImage } from "@mantine/core";

export default function ImgGrid() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/img1.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/Frame0.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/Frame2.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 4 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/img3.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 3 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/img7.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 3 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/img6.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 6 }}>
        <BackgroundImage
          src={`${imgUrl}/images/summit25/Frame3.webp`}
          radius="sm"
          h={140}
        />
      </Grid.Col>
    </Grid>
  );
}
