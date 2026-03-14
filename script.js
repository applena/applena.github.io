const prompts = [
  "Prompt: Photograph an ordinary object as if it belongs in a fantasy novel.",
  "Prompt: Write five lines of dialogue between your present self and your 10-year-old self.",
  "Prompt: Capture one image that feels like a memory from a film that doesn't exist.",
  "Prompt: Build a tiny story using only three colors and one weather condition.",
  "Prompt: Find a shadow, and make it the main character."
];

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const promptButton = document.getElementById("new-prompt");
const promptText = document.getElementById("prompt-text");
if (promptButton && promptText) {
  promptButton.addEventListener("click", () => {
    const selection = prompts[Math.floor(Math.random() * prompts.length)];
    promptText.textContent = selection;
  });
}

const themeButton = document.getElementById("theme-toggle");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isSunset = document.body.dataset.theme === "sunset";
    document.body.dataset.theme = isSunset ? "" : "sunset";
    themeButton.textContent = isSunset ? "Switch color vibe" : "Switch to cool blue vibe";
  });
}

const goodreadsCurrent = document.getElementById("goodreads-current");
if (goodreadsCurrent) {
  const userId = goodreadsCurrent.dataset.goodreadsUserId || "2174227";
  const shelf = goodreadsCurrent.dataset.goodreadsShelf || "read";
  const status = document.getElementById("goodreads-status");
  const book = goodreadsCurrent.querySelector(".goodreads-book");
  const cover = document.getElementById("goodreads-cover");
  const title = document.getElementById("goodreads-title");
  const rating = document.getElementById("goodreads-rating");

  const setStatus = (message) => {
    if (status) {
      status.textContent = message;
    }
  };

  const extractText = (parent, tagName) => {
    const escapedTag = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(tagName) : tagName;

    return (
      parent.querySelector(escapedTag)?.textContent?.trim() ||
      parent.getElementsByTagName(tagName)?.[0]?.textContent?.trim() ||
      ""
    );
  };

  if (userId) {
    const feedUrl = `https://www.goodreads.com/review/list_rss/${encodeURIComponent(userId)}?shelf=${encodeURIComponent(shelf)}&sort=date_updated&order=d`;
    const proxyUrls = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
      `https://cors.isomorphic-git.org/${feedUrl}`
    ];

    const fetchFeed = async () => {
      for (const proxyUrl of proxyUrls) {
        try {
          const response = await fetch(proxyUrl);
          if (!response.ok) {
            continue;
          }

          const xmlText = await response.text();
          if (xmlText) {
            return xmlText;
          }
        } catch {
          // Try next proxy.
        }
      }

      throw new Error("Feed request failed for all proxy endpoints");
    };

    setStatus("Loading your latest Goodreads rating…");

    fetchFeed()
      .then((xmlString) => {
        const xml = new DOMParser().parseFromString(xmlString, "application/xml");
        const parserError = xml.querySelector("parsererror");

        if (parserError) {
          throw new Error("Goodreads feed returned invalid XML");
        }

        const items = Array.from(xml.querySelectorAll("item"));
        const item = items.find((entry) => Number(extractText(entry, "user_rating")) > 0);

        if (!item) {
          throw new Error("No rated books found in Goodreads feed");
        }

        const bookTitle = extractText(item, "book_title") || extractText(item, "title");
        const userRating = extractText(item, "user_rating");
        const coverUrl =
          extractText(item, "book_large_image_url") ||
          extractText(item, "book_image_url") ||
          extractText(item, "book_small_image_url");

        if (title) {
          title.textContent = bookTitle || "Untitled book";
        }

        if (rating) {
          rating.textContent = userRating
            ? `Your rating: ${"★".repeat(Number(userRating))}${"☆".repeat(5 - Number(userRating))} (${userRating}/5)`
            : "Your rating: Not rated yet";
        }

        if (cover && coverUrl) {
          cover.src = coverUrl;
          cover.alt = `Cover of ${bookTitle || "your latest rated book"}`;
        } else if (cover) {
          cover.removeAttribute("src");
          cover.alt = "";
        }

        if (book) {
          book.hidden = false;
        }

        if (status) {
          status.hidden = true;
        }
      })
      .catch(() => {
        setStatus("Couldn’t load Goodreads ratings right now. Please try again in a moment.");
      });
  }
}
