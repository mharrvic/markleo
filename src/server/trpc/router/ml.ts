import { z } from "zod";
import type { IGenerateImage } from "../../../types/generate-image";
import { generateImage } from "../../../utils/banana";

import { publicProcedure, router } from "../trpc";

export const mlRouter = router({
  generateImage: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      const image = await generateImage(input.prompt);
      return image as IGenerateImage;
    }),
});
