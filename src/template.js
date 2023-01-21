import flag from "country-code-emoji";

export default function (cf) {
  const emoji = flag(cf.country);
  return `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Mukul Sharma</title>
    </head>
    <body>
      <code>Hello there! you're connecting from ${cf.city} in ${cf.country} ${emoji}</code>
    <h1>QR Generator</h1>
    <p>Click the below button to generate a new QR code. This will make a request to your serverless function.</p>
    <input type="text" id="text" value="https://github.com/mukul98s"></input>
    <button onclick="generate()">Generate QR Code</button>
    <p>Check the "Network" tab in your browser’s developer tools to see the generated QR code.</p>
  <script>
   function generate() {
    fetch(window.location.pathname, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: document.querySelector("#text").value })
    })
  }
  </script>
    </body>
    </html>
  `;
}
