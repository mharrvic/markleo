import * as banana from "@banana-dev/banana-dev";
import { env } from "../env/server.mjs";

export async function generateImage(prompt: string) {
  const modelParameters = {
    prompt: prompt,
  };

  const output = await banana.run(
    env.BANANA_API_KEY,
    env.BANANA_MODEL_KEY,
    modelParameters
  );
  return output;
}
