import { createBot, Intents, startBot } from "./deps.ts";

const token = Deno.env.get("DISCORD_TOKEN");
if (token == undefined) {
  throw Error("トークンが指定されていません。");
}

const bot = createBot({
  token: token,
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready() {
      console.log("Successfully connected to gateway");
    },
  },
});

await startBot(bot);
