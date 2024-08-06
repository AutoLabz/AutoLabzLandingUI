import React from "react";


export function Paragraph({ value }: { value: string }) {
  return (
    <p className="text-2xl font-bold">
      {value}
    </p>
  );
}
