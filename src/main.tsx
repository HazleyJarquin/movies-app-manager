import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { LanguageProvider } from "./context/I18nProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LanguageProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
