import React from "react";
import Layout from "@theme/Layout";
import { ObjectFlags } from "typescript";

const data = {
  "import/no-unresolved": "error",
  "import/named": "error",
  "import/namespace": "error",
  "import/default": "error",
  "import/export": "error",
  "import/no-named-as-default": "warn",
  "import/no-named-as-default-member": "warn",
  "import/no-duplicates": "warn",
};

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <table>
        <tr>
          <th>Rule</th>
          <th>Error</th>
          <th>Warning</th>
        </tr>
        {Object.entries(data).map(([rule, error]) => (
          <tr>
            <td>{rule}</td>
            <td>{error === "error" ? "✅" : "-"}</td>
            <td>{error === "warn" ? "✅" : "-"}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}
