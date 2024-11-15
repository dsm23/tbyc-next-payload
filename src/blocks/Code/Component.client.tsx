"use client";

import type { FunctionComponent } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { CopyButton } from "./CopyButton";

type Props = {
  code: string;
  language?: string;
};

export const Code: FunctionComponent<Props> = ({ code, language = "" }) => {
  if (!code) return null;

  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre className="overflow-x-auto rounded border border-border bg-black p-4 text-xs">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: "table-row", line })}>
              <span className="table-cell select-none text-right text-white/25">
                {i + 1}
              </span>
              <span className="table-cell pl-4">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
          <CopyButton code={code} />
        </pre>
      )}
    </Highlight>
  );
};