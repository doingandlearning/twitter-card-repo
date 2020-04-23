const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
  cloud_name: "sector",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.handler = async function (event, ctx) {
  const { queryStringParameters } = event;

  try {
    const imageUrl = cloudinary.url(
      `${process.env.KEVIN_IMAGE_VERSION}/ogimages/img-1.png`,
      {
        // resouce_type: "raw"
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: "remote",
          source: `https://hungry-brattain-538c0b.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
            queryStringParameters
          )}`,
        },
      }
    );
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
