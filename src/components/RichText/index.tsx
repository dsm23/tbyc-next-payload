import type { FunctionComponent } from "react";
import { cn } from "~/utilities/cn";
import { serializeLexical } from "./serialize";

type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: FunctionComponent<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null;
  }

  return (
    <div
      className={cn(
        {
          container: enableGutter,
          "max-w-none": !enableGutter,
          "prose mx-auto dark:prose-invert": enableProse,
        },
        className,
      )}
    >
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        serializeLexical({ nodes: content?.root?.children })}
    </div>
  );
};

export default RichText;