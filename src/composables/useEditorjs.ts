const image = (blockData: any, baseUrl: string) => {
  const width = 1200;
  const height = Math.trunc(
    (width * blockData.data.file.height) / blockData.data.file.width
  );
  const isFullWidth = !!blockData.data.stretched;
  const smallWidth = Math.trunc(width / 2);
  const smallHeight = Math.trunc(height / 2);

  const smallImage = `${baseUrl}assets/${blockData.data.file.fileId}.${blockData.data.file.extension}?width=${smallWidth}&quality=80`;
  const bigImage = `${baseUrl}assets/${blockData.data.file.fileId}.${blockData.data.file.extension}?width=${width}&quality=80`;
  const smallImageWebP = `${baseUrl}assets/${blockData.data.file.fileId}.${blockData.data.file.extension}?width=${smallWidth}&quality=80&format=webp`;
  const bigImageWebP = `${baseUrl}assets/${blockData.data.file.fileId}.${blockData.data.file.extension}?width=${width}&quality=80&format=webp`;

  return `<figure class="is-${isFullWidth ? "full" : "half"}">
      <picture>
        <source media="(max-width: ${smallWidth}px)" srcset="${smallImageWebP}" />
        <source media="(max-width: ${smallWidth}px)" srcset="${smallImage}" />
        ${
          isFullWidth
            ? `
          <source media="(min-width: ${
            smallWidth + 1
          }px)" srcset="${bigImageWebP}" />
          <source media="(min-width: ${
            smallWidth + 1
          }px)" srcset="${bigImage}" />
        `
            : ""
        }
        <img
            loading="lazy"
            width="${isFullWidth ? width : smallWidth}"
            height="${isFullWidth ? height : smallHeight}"
            src="${smallImage}"
            title="${blockData.data.caption}"
            alt="${blockData.data.caption || blockData.data.file.title}"
        />
      </picture>${
        blockData.data.caption
          ? `<figcaption>${blockData.data.caption}</figcaption>`
          : ""
      }
  </figure>`;
};

const text = (blockData: any) => {
  const tag = blockData.type === "paragraph" ? "p" : `h${blockData.data.level}`;
  let alignment;

  switch (blockData?.tunes?.alignmentTune?.alignment) {
    case "left":
      alignment = "start";
      break;

    case "right":
      alignment = "end";
      break;

    case "center":
      alignment = "center";
      break;

    default:
      alignment = "start";
      break;
  }
  return `<${tag} ${alignment ? `class="u-text-align-${alignment}"` : ""}>${
    blockData.data.text
  }</${tag}>`;
};

const list = (blockData: any) => {
  const tag = blockData.data.style === "unordered" ? "ul" : "ol";

  return generateList(tag, blockData.data.items);
};

const generateList = (tag: string, items: any[]) => {
  const itemsTag = items.reduce((acc, val) => {
    acc += Array.isArray(val) ? generateList(tag, val) : `<li>${val}</li>`;

    return acc;
  }, "");
  return `<${tag}>${itemsTag}</${tag}>`;
};

const quote = (blockData: any) => {
  return `<figure><blockquote>${blockData.data.text}</blockquote>${
    blockData.data.caption
      ? `<figcaption>${blockData.data.caption}</figcaption>`
      : ""
  }</figure>`;
};

const code = (blockData: any) => {
  return `<pre>${blockData.data.code}</pre>`;
};

const info = (blockData: any) => {
  return `<div class="info info--${blockData.type}">${
    blockData.data.title ? `<div>${blockData.data.title}</div>` : ""
  }<div>${blockData.data.message}</div></div>`;
};

export const useEditorjs = () => {
  const createHTML = (blocks: any[]) =>
    blocks.reduce((html, block) => {
      switch (block.type) {
        case "image":
          html += image(block, "");
          break;

        case "header":
        case "paragraph":
          html += text(block);
          break;

        case "list":
          html += list(block);
          break;

        case "delimiter":
          html += "<hr />";
          break;

        case "code":
          html += code(block);
          break;

        case "quote":
          html += quote(block);
          break;

        case "warning":
          html += info(block);
      }

      return html;
    }, "");

  return {
    createHTML,
  };
};
