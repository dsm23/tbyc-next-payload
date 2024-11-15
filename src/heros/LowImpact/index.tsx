import type { FunctionComponent, ReactNode } from "react";
import RichText from "~/components/RichText";
import type { Page } from "~/payload-types";

type LowImpactHeroType =
  | {
      children?: ReactNode;
      richText?: never;
    }
  | (Omit<Page["hero"], "richText"> & {
      children?: never;
      richText?: Page["hero"]["richText"];
    });

export const LowImpactHero: FunctionComponent<LowImpactHeroType> = ({
  children,
  richText,
}) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        {children ||
          (richText && <RichText content={richText} enableGutter={false} />)}
      </div>
    </div>
  );
};