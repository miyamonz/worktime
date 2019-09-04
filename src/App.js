import React from "react";
import useStore from "./store";

import { Grid, Cell } from "styled-css-grid";
import Row from "./Row";

export default function App() {
  const [{ days }, dispatch] = useStore();

  const works = Object.keys(days[0]);

  const addDate = () =>
    dispatch(({ days }) => ({
      days: [...days, { day: new Date() }]
    }));

  const Header = () => (
    <>
      {works.map(name => (
        <Cell width={1} key={`header.${name}`}>
          {name}
        </Cell>
      ))}
    </>
  );

  const updateByDate = row =>
    dispatch(state => {
      const days = [...state.days.filter(e => e.day !== row.day), row];
      return { days };
    });
  return (
    <>
      <h1>work time</h1>
      <button onClick={addDate}>add</button>
      <Grid columns={works.length} gap="2px">
        <Header />
        {days.map(row => (
          <Row {...{ row }} onUpdate={updateByDate} />
        ))}
      </Grid>
      <svg>
        <rect width={100} height={100} fill="black" />
      </svg>
    </>
  );
}
