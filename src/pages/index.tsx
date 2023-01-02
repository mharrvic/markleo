import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import ImageGenerator from "../component/ImageGenerator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Markleo AI Image Generator</title>
        <meta name="description" content="Markleo AI Image Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <nav className="flex">
          <p className="flex px-10 py-3 text-xl text-white">
            <Image
              src="/markleo.png"
              alt="Markleo AI Image Generator Logo"
              width="100"
              height="100"
            />
          </p>
          <div className="m-3 ml-auto">
            <a
              href="https://github.com/mharrvic/markleo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Image
                src="/github.svg"
                alt="Banana Logo"
                width="20"
                height="20"
              />
              <p className="text-white"> Source Code</p>
            </a>
          </div>
        </nav>
        <div className="mx-4 px-4 py-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <>
              <p className="text-white">
                {" "}
                Markleo AI{" "}
                <span className="text-[#ff6b00]">Image Generator</span>
              </p>
              <p className="mb-4 font-mono text-lg text-gray-400">
                Stable diffusion model deployed in a Serverless GPU (banana.dev)
              </p>

              <ImageGenerator />
            </>
          </h1>
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default Home;
