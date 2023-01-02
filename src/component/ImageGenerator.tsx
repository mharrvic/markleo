import clsx from "clsx";
import Image from "next/image";
import React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { trpc } from "../utils/trpc";

type Inputs = {
  prompt: string;
};

const ImageGenerator = () => {
  const [image, setImage] = React.useState<string>();
  const { register, handleSubmit } = useForm<Inputs>();

  const { mutateAsync, isLoading } = trpc.ml.generateImage.useMutation({
    onSuccess: (data) => {
      toast.remove();
      toast.success("Successfully Generated! 🎉");
      setImage(data.modelOutputs[0]?.image_base64);
    },
    onError: () => {
      toast.error("Error!");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    toast.loading("Generating Image with Stable Diffusion...");
    await mutateAsync({ prompt: data.prompt });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {image && (
        <Image
          src={`data:image/png;base64,${image}`}
          alt="Generated image"
          width={400}
          height={400}
        />
      )}

      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="generate" className="sr-only">
          Generate
        </label>
        <div>
          <textarea
            {...register("prompt", { required: true })}
            rows={5}
            name="prompt"
            id="prompt"
            className="block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Add your prompt..."
          />
        </div>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className={clsx(
              "inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm",
              { "cursor-not-allowed bg-gray-500": isLoading },
              { "bg-indigo-600": !isLoading }
            )}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageGenerator;
