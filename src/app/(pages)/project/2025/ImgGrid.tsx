"use client";

import { Grid, Skeleton, BackgroundImage } from "@mantine/core";

export default function ImgGrid() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <BackgroundImage src="/summit24/img1.jpg" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <BackgroundImage src="/summit24/Frame0.webp" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 8 }}>
        <BackgroundImage src="/summit24/Frame2.webp" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 4 }}>
        <BackgroundImage src="/summit24/img3.jpg" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 3 }}>
        <BackgroundImage src="/summit24/img7.jpg" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 3 }}>
        <BackgroundImage src="/summit24/img6.jpg" radius="sm" h={140} />
      </Grid.Col>
      <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 6 }}>
        <BackgroundImage src="/summit24/Frame3.webp" radius="sm" h={140} />
      </Grid.Col>
    </Grid>
  );
}
