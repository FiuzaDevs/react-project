import React, { useState } from "react";

interface dataInterface {
  id: string;
  citys: citysInterface[];
}

interface citysInterface {
  id: string;
  cityName: string;
  state: string;
}

export function HomeComponent() {
  const [data, setData] = useState<dataInterface[]>([
    {
      id: "1",
      citys: [
        { id: "1", cityName: "Brasilia", state: "DF" },
        { id: "2", cityName: "Rio de janeiro", state: "RJ" },
      ],
    },
  ]);

  return (
    <section>
      <div style={{ color: "red" }}>
        <h1>Home</h1>
      </div>
      <div></div>
    </section>
  );
}
