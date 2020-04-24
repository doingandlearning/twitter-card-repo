const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
  cloud_name: "kc-cloud",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.handler = async function (event, ctx) {
  const { queryStringParameters } = event;
  try {
    const imageUrl = `https://res.cloudinary.com/${
      process.env.CLOUD_NAME
    }/image/fetch/${encodeURIComponent(
      `https://hungry-brattain-538c0b.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
        queryStringParameters
      )}`
    )}`;
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl,
      },
      body: "",
    };
  } catch (e) {
    console.log(e);
  }
};
