"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./MyPagination.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import imgNext from "../../../../public/images/Catalog/next.svg";
import imgPrevious from "../../../../public/images/Catalog/previous.svg";
export default function MyPagination() {
  console.log(imgNext);

  const e = () => <img src={imgNext.src}></img>;
  const n = () => <img src={imgPrevious.src}></img>;
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiPaginationItem: {
            defaultProps: {
              components: {
                previous: e,
                next: n,
              },
            },
          },
        },
      })}
    >
      <Stack spacing={2} className="MyPagination">
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </ThemeProvider>
  );
}
