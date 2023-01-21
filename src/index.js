import template from "./template";
import qr from "qr-image";

async function generate(request) {
  const { text } = await request.json();
  const qr_png = qr.imageSync(text || "https://workers.dev");

  return new Response(qr_png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === "POST") {
      return generate(request);
    }
    return new Response(template(request.cf), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};
