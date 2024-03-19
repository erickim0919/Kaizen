import * as React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col justify-center bg-gray-900 min-h-screen w-full">
      <div className="flex flex-col justify-center items-center w-full bg-gray-900 max-w-7xl mx-auto">
        <div className="flex overflow-hidden relative flex-col w-full min-h-[652px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cece6da8ce8799481366ab9a6f73b17d5aa475712cfb343cd3937cd2417c5828?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Background image" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col justify-center w-full max-md:max-w-full">
            <div className="flex flex-col justify-center px-16 py-5 w-full max-md:px-5 max-md:max-w-full">
              <nav className="flex gap-5 justify-between px-8 mx-5 max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-1 justify-center items-center my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6093c4ba66590f5b1f1b5e4c86b617ad0a1a6e436f814fb6e41e0ac244b4d160?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Logo" className="mt-4 mr-auto ml-0 w-full aspect-[5.88] max-w-[160px]" />
                </div>
                <div className="flex flex-1 gap-3 text-base font-semibold leading-6" />
              </nav>
            </div>
          </div>
          <div className="flex relative flex-col justify-center py-10 w-full max-md:px-5 max-md:max-w-full">
            <div className="justify-center px-8 mx-5 my-4 max-w-screen-xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="flex gap-3 self-start py-1 pr-2.5 pl-1 text-sm font-medium leading-5 text-purple-300 bg-gray-900 rounded-full border-2 border-violet-400 border-solid">
                          <div className="justify-center px-2.5 py-0.5 text-center whitespace-nowrap bg-gray-900 rounded-full border-2 border-violet-400 border-solid">
                            New!
                          </div>
                          <div className="flex gap-1 my-auto">
                            <div className="grow">Demo Available Now!</div>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9713be20261ae426847d7dce2ace8128de2490bc67328b304a50d4b1a3f4c38?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Arrow icon" className="shrink-0 my-auto w-4 aspect-square" />
                          </div>
                        </div>
                        <h1 className="mt-4 text-6xl font-semibold tracking-tighter leading-[72px] text-neutral-100 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                          Make money while helping AI grow
                        </h1>
                      </div>
                      <p className="mt-6 text-xl italic leading-8 text-neutral-400 max-md:max-w-full">
                        Kaizen bridges the gap between AI and Humans, allowing for <em className="italic font-bold">you </em>to humanize future AI technologies.
                      </p>
                    </div>
                    <Link href="/demo" passHref>
                      <button className="flex gap-2.5 justify-center self-start px-6 py-4 mt-12 text-lg font-semibold leading-7 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700 max-md:px-5 max-md:mt-10">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67fc21eb31ee0fd09ee2e4fdccdd651068db52d191d18d5d295e9cb142228bd3?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Play icon" className="shrink-0 my-auto w-6 aspect-square" />
                        <span className="justify-center px-0.5">Demo</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col ml-5 w-[44%] md:w-[44%] max-md:ml-0 max-md:w-full max-md:pt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/010ddaaa1fa3ae525325154f403ebeb37c7b124ee3f3913fac9350fe054960d2?apiKey=3eade93735fb450fa2988b2d5cdbbdff&"
                    alt="Product screenshot"
                    className="object-cover w-full h-auto aspect-[0.8] md:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}