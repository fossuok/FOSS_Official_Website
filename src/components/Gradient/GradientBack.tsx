"use client";
import { useMouse } from "@mantine/hooks";
import classes from "./GradientBack.module.css";

export default function GradientBack() {
  const { x, y } = useMouse();

  return (
    <>
      <div>
        <div
          style={{
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(147, 51, 234, 0.2), transparent 40%)`,
          }}
          className={classes.focus}
        ></div>
      </div>
    </>
  );
}
