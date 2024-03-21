'use client'

import React, { useState, useEffect } from "react";

interface StatCardProps {
  imageSrc: string;
  imageAlt: string;
  statValue: string; // Adjust the type based on what you actually expect (number, string, etc.)
  statLabel: string;
  trendValue: string; // Adjust the type based on what you actually expect
  trendIcon: string;
  trendLabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ imageSrc, imageAlt, statValue, statLabel, trendValue, trendIcon, trendLabel }) => (
  <div className="flex flex-col grow px-6 py-5 mx-auto w-full bg-gray-900 rounded-xl border border-gray-800 border-solid shadow-sm max-md:pl-5 max-md:mt-6">
    <div className="flex gap-5 justify-between items-start">
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="shrink-0 mt-1 border border-solid shadow-sm aspect-[0.93] border-zinc-700 w-[51px]" />
      <div className="flex justify-center items-center">
        
      </div>
    </div>
    <div className="flex flex-col mt-5">
      <div className="text-sm font-medium leading-5 text-neutral-400">{statLabel}</div>
      <div className="flex flex-wrap gap-4 content-center mt-2">
        <div className="flex-auto text-4xl font-semibold tracking-tighter leading-10 text-neutral-100">{statValue}</div>
        <div className="flex gap-2 my-auto text-sm font-medium leading-5">
          <div className="flex gap-1 justify-center text-center text-green-400 whitespace-nowrap">
            <img loading="lazy" src={trendIcon} alt="" className="shrink-0 w-5 aspect-square" />
            <div>{trendValue}</div>
          </div>
          <div className="flex-auto text-neutral-400">{trendLabel}</div>
        </div>
      </div>
    </div>
  </div>
);

interface ExplanationCardProps {
  bgColor: string;
  imageSrc: string;
  imageAlt: string;
  explanation: string;
  onClick: () => void; // Assuming onClick is a function that takes no arguments and returns nothing
  style?: React.CSSProperties;
}

const ExplanationCard: React.FC<ExplanationCardProps> = ({ bgColor, imageSrc, imageAlt, explanation, onClick, style}) => (
    <div 
      onClick={onClick}
      style={style} 
      className={`flex flex-col grow px-6 pt-6 w-full text-base font-medium leading-6 text-center text-white ${bgColor} max-md:pl-5 max-md:mt-8 cursor-pointer`}>
      <div className="flex flex-col">
        <img loading="lazy" src={imageSrc} alt={imageAlt} className="self-center aspect-[1.08] mix-blend-plus-lighter w-[98px]" />
        <div className="flex flex-col justify-center mt-5">
          <div>{explanation}</div>
        </div>
      </div>
    </div>
  );

export default function Home() {
  const statCardsData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9c22b593c769e7acf0b57881c6ac99c134d8dc97be53a4ddd1fee9b4ef4f018?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Questions answered icon",
      statValue: "1,420",
      statLabel: "Questions answered",
      trendValue: "20%",
      trendIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/105e67d2f7153e9aedc22c44a6c9f6628a132d145ddc968d386e5a471260ad74?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      trendLabel: "vs yesterday",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/30a808122f579653a3efebe2393fabf8984dcce294d9067aa642dcb2d7c8900c?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Points earned icon", 
      statValue: "10,210",
      statLabel: "Points earned",
      trendValue: "15%",
      trendIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c80082521dee287cf383852c5b05c41137aaf6e286392e485ee218138f39050?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      trendLabel: "vs yesterday",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/730be7cf7c06dcc7689b01d5ac8890464199b31a3f1e42509758191ad1b0538e?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Active now icon",
      statValue: "316",
      statLabel: "Active now",
      trendValue: "3%",
      trendLabel: "vs yesterday",
      trendIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6216462de55268ba1bb71845d29e54da3b03841a650353602eb94bdf39c6a292?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
    },
  ];

  var initialExplanationCardsData = [
    {
      bgColor: "bg-blue-500",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb1f4719f856af71cf38c11a09ce56510e9d5d671b14d02a37780eff088534a3?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Gravity illustration",
      explanation:
        "Gravity is like a giant invisible magnet pulling everything towards the center of the Earth, making things fall down instead of floating into space.",
    },
    {
      bgColor: "bg-green-500", 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee2f11bc7a0cc0814438f08dbee34f06751adc9e2a34385f72a7a39cbbf7b8b1?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Moon landing illustration",
      explanation:
        "The first astronaut to land on the Moon was Neil Armstrong, who did it on a spaceship called Apollo 11. Ooga Booga Booga Ooga Boey Billen Baba Tunde",
    },
    {
      bgColor: "bg-violet-500",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/022e9d8b79e1df65ada30828d5a83db255829094ef4cae35717517d8724ccd9e?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Astronaut illustration",
      explanation:
        "Brave astronauts flew in a spaceship all the way to the moon, and one of them, Neil Armstrong, stepped out and became the first man to walk on the moon.",
    },
    {
      bgColor: "bg-red-600",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e180977c2a8cd6070ce76f6b5f4a23945bbd1dba718674c6675122dc636e1c?apiKey=3eade93735fb450fa2988b2d5cdbbdff&",
      imageAlt: "Big Bang illustration", 
      explanation:
        "The Big Bang was when there was a giant explosion that led to the creation of the universe and everything that we see today.",
    },
  ];

  // State to track visibility of each explanation card
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(initialExplanationCardsData.length).fill(true));

  // Function to handle click on a card
  const handleCardClick = (index: number): void => {
    const updatedVisibility: boolean[] = [...visibleCards];
    updatedVisibility[index] = false; // Set the clicked card to not visible
    setVisibleCards(updatedVisibility);
  };

  const [explanationCardsData, setExplanationCardsData] = useState(initialExplanationCardsData);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/qna`, { // Adjust the endpoint as necessary
          method: "GET",
          credentials: "include", // If your API requires credentials, otherwise remove this line
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
  
        setQuestion(data.question);
        // Create an array from the answer fields
        const answers = [data.answer_1, data.answer_2, data.answer_3, data.answer_4];
        // Update the explanation for each card based on the answers array
        const updatedData = explanationCardsData.map((card, index) => {
          // Ensure there's an answer for the current card to avoid undefined values
          const newExplanation = answers[index] ? answers[index] : card.explanation;
          return { ...card, explanation: newExplanation };
        });
        setExplanationCardsData(updatedData);
      } catch (error) {
        console.error('Error fetching explanation content:', error);
      }
    };
  
    fetchData();
  }, []); // This effect depends on no variables and thus runs only once after the initial render

  return (
    <div className="flex gap-0 bg-gray-900 max-md:flex-wrap">
      <aside className="flex flex-col justify-center bg-gray-900 border-r border-gray-800 border-solid max-md:hidden">
        <div className="flex flex-col justify-between max-md:hidden">
          <div className="flex flex-col pt-8">
            <div className="flex flex-col justify-center items-start px-6 max-md:pl-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f49cf9805f1297fca19ce316364620a2e1c8f663ff6e1111f6a066a4a77cfb89?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Logo" className="w-10 aspect-[1.14]" />
            </div>
            <div className="flex flex-col justify-center px-4 mt-6">
              <div className="flex justify-center items-center px-3 w-12 h-12 bg-gray-800 rounded-md">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c6ff449fb1ec2d220788e3542585cb31d26f423c37a97a94fc9846f2b34373?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Dashboard icon" className="w-6 aspect-square" />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 pb-6 mt-[573px] max-md:mt-10">
            <div className="flex flex-col">
              <div className="flex justify-center items-center px-3 w-12 h-12 bg-gray-900 rounded-md">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76561ae73d3d37938d4a2200f0bcc8028a4c9207f62ea53b2812b54c5abd0606?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Settings icon" className="w-6 aspect-square" />
              </div>
              <div className="flex justify-center items-center px-3 mt-2 w-12 h-12 bg-gray-900 rounded-md">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5b42aab14aa20a5a410800978514e17d88778109cffa7a31e4bb4aba2484a5?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="Logout icon" className="w-6 aspect-square" />
              </div>
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center self-center mt-6 w-12 aspect-square">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ea01984b7b118c1bdfe9c767264fa7e716868f33389a117668e02e87dc992f?apiKey=3eade93735fb450fa2988b2d5cdbbdff&" alt="User avatar" className="object-cover absolute inset-0 size-full" />
              <div className="relative shrink-0 h-12 rounded-full border border-solid border-white border-opacity-10" />
            </div>
          </div>
        </div>
      </aside>
      <main className="flex flex-col grow shrink-0 self-start py-10 bg-gray-900 basis-0 w-fit max-md:max-w-full">
        <header className="flex flex-col justify-center font-semibold max-md:max-w-full">
          <div className="flex flex-col px-8 max-md:px-5 max-md:max-w-full">
            <h1 className="flex flex-col justify-center text-3xl leading-10 text-neutral-100 max-md:max-w-full">
              <div className="flex flex-col flex-wrap justify-center content-start max-md:max-w-full">
                <div className="justify-center max-md:max-w-full">Welcome back, Doug!</div>
              </div>
            </h1>
            <nav className="flex flex-col justify-center items-start mt-6 text-sm leading-5 border-b border-gray-800 border-solid text-neutral-400 max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-3">
                <div className="justify-center px-1 pb-3 whitespace-nowrap border-b-2 border-solid border-neutral-300 text-neutral-300">Overview</div>
                <div className="justify-center px-1 pb-3 whitespace-nowrap">Rewards</div>
                <div className="justify-center px-1 pb-3">Transaction History</div>
              </div>
            </nav>
          </div>
        </header>
        <section className="flex flex-col justify-center mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center px-8 max-md:px-5 max-md:max-w-full">
            <div className="flex-wrap content-start max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {statCardsData.map((card, index) => (
                  <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <StatCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col px-8 mx-10 mt-14 max-w-screen-xl max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <h2 className="text-3xl font-bold tracking-tighter leading-10 text-center border border-black border-solid text-neutral-100 max-md:max-w-full">
            {question || "Loading question..."} {/* Fallback text while loading */}
          </h2>
          <div className="flex-wrap content-start mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {explanationCardsData.map((card, index) => (
              <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ExplanationCard
                  {...card}
                  // Applying conditional styling to make content invisible instead of not rendering
                  style={!visibleCards[index] ? { visibility: 'hidden' } : {}}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}