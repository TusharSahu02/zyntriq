// import axios from "axios";
import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";
config();

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export async function createPost(status) {
  const newPost = await twitterClient.v2.tweet(status);
  console.log("calling create Post");
  return {
    content: [
      {
        type: "text",
        text: `Tweeted: ${status}`,
      },
    ],
  };
}

/*

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const WOEID = process.env.WOEID || 1;

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
};

// Fetch trending topics based on WOEID
export async function getTrendingTopics() {
  const url = `https://api.twitter.com/1.1/trends/place.json?id=${WOEID}`;
  const response = await axios.get(url, { headers });
  return response.data[0].trends.map((trend) => trend.name);
}

// Fetch tweets based on a trend
export async function searchTweets(query, count = 10) {
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(query)}&count=${count}&result_type=popular&lang=en`;
  const response = await axios.get(url, { headers });
  return response.data.statuses.map((tweet) => ({
    text: tweet.text,
    user: tweet.user.screen_name,
    created_at: tweet.created_at,
  }));
}
*/
