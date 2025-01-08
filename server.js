const express = require("express");
const path = require("path");
const rateLimiter = require("./rateLimit");
const bodyParser = require("body-parser");
const cors = require("cors");
const { corsOptions } = require("./config");
const { shortenUrl, getOriginalUrl } = require("./urlService");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(rateLimiter);

app.post("/shorten", async (req, res) => {
  try {
    const { url } = req.body;
    const shortUrl = await shortenUrl(url);
    res.json({ short_url: `http://localhost:${port}/${shortUrl}` });
  } catch (error) {
    console.error("Error in /shorten:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/:shortUrl", async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const originalUrl = await getOriginalUrl(shortUrl);

    if (originalUrl) {
      return res.redirect(originalUrl);
    } else {
      return res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error in /:shortUrl:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
