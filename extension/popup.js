const status = document.getElementById("status");
const saveBtn = document.getElementById("saveBtn");

let detectedProduct = null;

async function detectProduct() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      function findPrice() {
        const selectors = [
          ".a-price .a-offscreen",
          "#priceblock_ourprice",
          "#priceblock_dealprice",
          ".price",
          "[data-price]",
          "[class*='price']",
          "[class*='Price']",
          "[class*='amount']",
          "[class*='font-extrabold']",
          "span.text-2xl",
          "span.text-3xl"
        ];

        for (const selector of selectors) {
          const el = document.querySelector(selector);
          const text = el?.innerText?.trim();

          if (text && /\d/.test(text)) {
            return text;
          }
        }

        const elements = [...document.querySelectorAll("span, div, p, strong")];

        for (const el of elements) {
          const text = el.innerText?.trim();
          if (!text) continue;

          const looksLikePrice =
            /(\d{2,6})\s?(DH|DHS|MAD|€|\$|USD|EUR)/i.test(text) ||
            /(DH|DHS|MAD|€|\$|USD|EUR)\s?(\d{2,6})/i.test(text);

          const badWords = /delivery|livraison|shipping|coupon|discount|réduction|old|was|before/i.test(text);

          if (looksLikePrice && !badWords) {
            return text;
          }
        }

        return "Price not detected";
      }

      const website = window.location.hostname;

      const title =
        document.querySelector("#productTitle")?.innerText?.trim() ||
        document.querySelector("h1")?.innerText?.trim() ||
        document.title;

      const price = findPrice();

      const image =
        document.querySelector("#landingImage")?.src ||
        document.querySelector("meta[property='og:image']")?.content ||
        document.querySelector("img")?.src ||
        "";

      return {
        title,
        price,
        image,
        url: window.location.href,
        website
      };
    }
  });

  detectedProduct = results[0].result;

  status.innerHTML = `
    <strong>${detectedProduct.title}</strong><br>
    ${detectedProduct.price}<br>
    ${detectedProduct.website}
  `;
}

saveBtn.addEventListener("click", async () => {
  if (!detectedProduct) return;

  await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(detectedProduct)
  });

  status.innerHTML = "✅ Saved to One Cart";
});

detectProduct();