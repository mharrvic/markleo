const ImageGenerator = () => {
  return (
    <div className="flex justify-center">
      <form className="w-1/2">
        <label htmlFor="generate" className="sr-only">
          Generate
        </label>
        <div>
          <textarea
            rows={5}
            name="generate"
            id="generate"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Add your prompt..."
            defaultValue={""}
          />
        </div>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageGenerator;
