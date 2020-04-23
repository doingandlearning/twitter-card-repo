'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var Textfit = _interopDefault(require('react-textfit'));

/** @jsx jsx */
function Image() {
  return core.jsx("div", {
    css: {
      width: 1200,
      height: 630,
      backgroundImage: "radial-gradient(circle at 69% 75%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 38%,transparent 38%, transparent 69%,transparent 69%, transparent 100%),radial-gradient(circle at 41% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 3%,transparent 3%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 94% 91%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 48%,transparent 48%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 68% 38%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 34%,transparent 34%, transparent 36%,transparent 36%, transparent 100%),radial-gradient(circle at 81% 20%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 40%,transparent 40%, transparent 61%,transparent 61%, transparent 100%),radial-gradient(circle at 46% 37%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 37%,transparent 37%, transparent 76%,transparent 76%, transparent 100%),radial-gradient(circle at 49% 5%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 43%,transparent 43%, transparent 67%,transparent 67%, transparent 100%),radial-gradient(circle at 18% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 4%,transparent 4%, transparent 20%,transparent 20%, transparent 100%),radial-gradient(circle at 43% 68%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 10%,transparent 10%, transparent 36%,transparent 36%, transparent 100%),linear-gradient(135deg, rgb(85, 133, 238),rgb(177, 145, 214));",
      position: "absolute",
      display: "flex",
      overflow: "hidden"
    }
  }, core.jsx(core.Global, {
    styles: {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: "helvetica"
      }
    }
  }), core.jsx("div", {
    css: {
      backgroundColor: "#11113B",
      margin: "40px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: 15,
      padding: "2rem",
      boxShadow: "\n  0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n  0 12.5px 10px rgba(0, 0, 0, 0.035),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n  0 100px 80px rgba(0, 0, 0, 0.07)"
    }
  }, core.jsx("h1", {
    css: {
      color: "#EBECFA",
      height: "100%",
      textAlign: "left"
    }
  }, core.jsx(Textfit, {
    max: 256,
    min: 24,
    style: {
      minHeight: "80%",
      maxHeight: "80%",
      lineHeight: 1
    }
  }, "How to make use of API Routes in NextJS")), core.jsx("div", {
    css: {
      color: "#EBECFA",
      display: "flex",
      justifyContent: "space-between"
    }
  }, core.jsx("ul", {
    css: {
      listStyleType: "none",
      display: "flex",
      "& li": {
        marginRight: ".5rem",
        "&:not(:last-child):after": {
          content: "'-'",
          marginLeft: ".5rem"
        }
      },
      fontSize: 40
    }
  }, core.jsx("li", null, "react"), core.jsx("li", null, "next")), core.jsx("span", {
    css: {
      fontSize: 40
    }
  }, "@dolearning"))));
}

module.exports = Image;
