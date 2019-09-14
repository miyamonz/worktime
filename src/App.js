import React from "react";
import useStore from "./store";

import { Grid, Cell } from "styled-css-grid";
import InputTime from "./InputTime";
import { format } from "date-fns";

export default function App() {
  const [{ days, works }, dispatch] = useStore();
  return (
    <>
      <h1>work time</h1>
      <Grid columns={works.length + 1} gap="2px">
        <Cell width={1} key={`LU`}>
          date
        </Cell>
        {works.map(name => (
          <Cell width={1} key={`header.${name}`}>
            {name}
          </Cell>
        ))}
        {days.map(row => (
          <>
            <Cell>{format(row.day, "yyyy-MM-dd")}</Cell>
            <Cell>
              <InputTime />
            </Cell>
            <Cell>
              <InputTime />
            </Cell>
          </>
        ))}
      </Grid>
      <svg>
        <rect width={100} height={100} fill="black" />
      </svg>
    </>
  );
}
