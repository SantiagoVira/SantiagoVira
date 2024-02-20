import { PortableText } from "@portabletext/react";
import NextLink from "next/link";

const PortableTextLayout: React.FC<{
  text: any[];
}> = ({ text }) => {
  if (!text) {
    return <></>;
  }
  return (
    <PortableText
      value={text}
      components={{
        list: ({ index, children }) => (
          <ul style={{ listStyleType: index ? "circle" : "disc" }}>
            {children}
          </ul>
        ),
        listItem: ({ index, children }) => (
          <li className="ml-4 text-inherit">{children}</li>
        ),
        marks: {
          code: ({ children }) => {
            return <code style={{ fontSize: "inherit" }}>{children}</code>;
          },
          link: ({ text, value }) => {
            return (
              <NextLink
                href={value.href}
                passHref
                style={{ textDecoration: "underline", fontSize: "inherit" }}>
                {text}
              </NextLink>
            );
          },
        },
        types: {
          code: ({ value }) => (
            <code className="my-3 w-full" style={{ fontSize: "inherit" }}>
              {value.code.split("\n").map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
            </code>
          ),
          break: () => <br />,
        },
      }}
    />
  );
};

export default PortableTextLayout;
