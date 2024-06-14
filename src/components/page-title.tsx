import React from "react";

export function PageTitle({ title }: { title: string }) {
  return (
    <h2 className="font-scroll-m-20 border-b text-3xl font-semibold">
      {title}
    </h2>
  );
}
