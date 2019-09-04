import React from "react";
import { Grid, Cell } from "styled-css-grid";
import InputTime from "./InputTime";
import { format } from "date-fns";

const wrapCell = t => <Cell>{t}</Cell>;
export default function Row({ row, onUpdate }) {
  const works = Object.keys(row);
  return (
    <>
      {works
        .map(name => {
          if (name === "day") return format(row.day, "yyyy-MM-dd");

          const updateDate = value => onUpdate({ ...row, [name]: value });

          return (
            <>
              {row[name]}
              <InputTime
                onChange={({ target: { value } }) => updateDate(value)}
              />
            </>
          );
        })
        .map(wrapCell)}
    </>
  );
}
