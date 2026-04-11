
"use client";
import { useEffect } from "react";
import { fabric } from "fabric";

export default function Builder() {
  useEffect(() => {
    const canvas = new fabric.Canvas("c");
    const text = new fabric.Textbox("Edit me", {
      left: 100,
      top: 100
    });
    canvas.add(text);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Canvas Builder</h2>
      <canvas id="c" width={600} height={400} />
    </div>
  );
}
