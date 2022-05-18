import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          type: "deposit",
          category: "dev",
          amount: 6700,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Casa",
          type: "withdraw",
          category: "Casa",
          amount: 1700,
          createdAt: new Date("2021-02-06 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transactions", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
