"use client";

import React from "react";
// alert
import { SnackbarProvider } from "notistack";

function ProviderClient({ children }: { children: React.ReactNode }) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}

export default ProviderClient;
