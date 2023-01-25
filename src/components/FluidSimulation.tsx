"use client";

import React, { useEffect, useRef } from "react";
import { createFluidSimulation } from "./createFluidSimulation";

export function FluidSimulation(
  props: React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >
) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createFluidSimulation(ref.current);
  }, []);

  return <canvas width="100%" height="100%" {...props} ref={ref}></canvas>;
}
