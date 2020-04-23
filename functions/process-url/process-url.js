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
    // https://res.cloudinary.com/kc-cloud/image/upload/v1587626740/ogimages/img-1.png
    const imageUrl = cloudinary.url(
      `${process.env.KEVIN_IMAGE_VERSION}/og-images/img-1.png`,
      {
        // resouce_type: "raw"
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: "remote",
          source: `https://relaxed-payne-d1bfbe.netlify.com/.netlify/functions/gen-opengraph-image?${qs.stringify(
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
