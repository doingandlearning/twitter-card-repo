/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import ScaleText from "react-scale-text";
import { render } from "react-dom";

export default function Image() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        backgroundImage:
          "radial-gradient(circle at 69% 75%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 38%,transparent 38%, transparent 69%,transparent 69%, transparent 100%),radial-gradient(circle at 41% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 3%,transparent 3%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 94% 91%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 48%,transparent 48%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 68% 38%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 34%,transparent 34%, transparent 36%,transparent 36%, transparent 100%),radial-gradient(circle at 81% 20%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 40%,transparent 40%, transparent 61%,transparent 61%, transparent 100%),radial-gradient(circle at 46% 37%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 37%,transparent 37%, transparent 76%,transparent 76%, transparent 100%),radial-gradient(circle at 49% 5%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 43%,transparent 43%, transparent 67%,transparent 67%, transparent 100%),radial-gradient(circle at 18% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 4%,transparent 4%, transparent 20%,transparent 20%, transparent 100%),radial-gradient(circle at 43% 68%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 10%,transparent 10%, transparent 36%,transparent 36%, transparent 100%),linear-gradient(135deg, rgb(85, 133, 238),rgb(177, 145, 214));",
        position: "absolute",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "helvetica",
          },
        }}
      />
      <div
        css={{
          backgroundColor: "#11113B",
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 15,
          padding: "2rem",
          boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`,
        }}
      >
        <h1
          css={{
            color: "#EBECFA",
            textAlign: "left",
            marginLeft: "20px",
            height: "80%",
          }}
        >
          <ScaleText minFontSize={24} maxFontSize={256}>
            How to make use of API Routes in NextJS
          </ScaleText>
        </h1>
        <div
          css={{
            color: "#EBECFA",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul
            css={{
              listStyleType: "none",
              display: "flex",
              "& li": {
                marginRight: ".5rem",
                "&:not(:last-child):after": {
                  content: "'-'",
                  marginLeft: ".5rem",
                },
              },
              fontSize: 40,
            }}
          >
            {window.tags.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <span css={{ fontSize: 40 }}>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<Image />, document.getElementById("dolearning"));
