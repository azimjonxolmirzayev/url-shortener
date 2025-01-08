const shortid = require("shortid");
const pool = require("./database");
const redisClient = require("./redis");

const shortenUrl = async (url) => {
  const shortUrl = shortid.generate();
  try {
    await pool.query(
      "INSERT INTO urls(short_url, original_url) VALUES($1, $2)",
      [shortUrl, url]
    );
    await redisClient.set(shortUrl, url);
    return shortUrl;
  } catch (error) {
    throw new Error("Error in shortening URL: " + error.message);
  }
};

const getOriginalUrl = async (shortUrl) => {
  try {
    let originalUrl = await redisClient.get(shortUrl);

    if (!originalUrl) {
      const result = await pool.query(
        "SELECT original_url FROM urls WHERE short_url = $1",
        [shortUrl]
      );

      if (result.rows.length > 0) {
        originalUrl = result.rows[0].original_url;
        await redisClient.set(shortUrl, originalUrl);
      }
    }

    return originalUrl;
  } catch (error) {
    throw new Error("Error in retrieving original URL: " + error.message);
  }
};

module.exports = { shortenUrl, getOriginalUrl };
