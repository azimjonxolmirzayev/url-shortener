const pool = require("./database");
const redisClient = require("./redis");

const trackUrlVisit = async (shortUrl) => {
  await redisClient.incr(`visit_count:${shortUrl}`);

  await pool.query(
    "UPDATE urls SET visit_count = visit_count + 1 WHERE short_url = $1",
    [shortUrl]
  );
};

const getVisitCount = async (shortUrl) => {
  const visitCount = await redisClient.get(`visit_count:${shortUrl}`);
  if (visitCount) return visitCount;

  const result = await pool.query(
    "SELECT visit_count FROM urls WHERE short_url = $1",
    [shortUrl]
  );
  return result.rows.length > 0 ? result.rows[0].visit_count : 0;
};

module.exports = { trackUrlVisit, getVisitCount };
