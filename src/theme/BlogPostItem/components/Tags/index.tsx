import { useBlogPost } from "@docusaurus/theme-common/internal";
export default function Tags({ style }: { style?: React.CSSProperties }) {
  const {
    frontMatter: { tags },
  } = useBlogPost();

  const tag = tags.map((text) => {
    return (
      <span
        key={text.toString()}
        style={{
          marginRight: 14,
          borderRadius: 24,
          fontSize: 16,
          // background: "var(--tags-bg-color)",
          color: "#ff5900",
          padding: "5px 9px",
          marginLeft: "-9px",
        }}
      >
        {text.toString()}
      </span>
    );
  });
  return <div style={style}>{tag}</div>;
}
