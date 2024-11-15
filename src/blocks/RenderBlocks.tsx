import type { FunctionComponent } from "react";
import { ArchiveBlock } from "~/blocks/ArchiveBlock/Component";
import { CallToActionBlock } from "~/blocks/CallToAction/Component";
import { ContentBlock } from "~/blocks/Content/Component";
import { FormBlock } from "~/blocks/Form/Component";
import { MediaBlock } from "~/blocks/MediaBlock/Component";
import type { Page } from "~/payload-types";

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
};

export const RenderBlocks: FunctionComponent<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
