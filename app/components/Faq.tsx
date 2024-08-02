"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "/public/plus.svg";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    question: "How does AutoLabz use LLMs to search for cars?",
    answer:
      "AutoLabz leverages large language models (LLM) to understand natural language queries and provide accurate car search results by analyzing and interpreting user inputs efficiently. For example, you can search 'Find me a red 2020 Tesla Model 3' and AutoLabz will return relevant results.",
  },
  {
    question: "What machine learning algorithms does AutoLabz use?",
    answer:
      "AutoLabz uses a variety of machine learning algorithms, including hybrid search techniques, k-means clustering, k-nearest neighbors, and vector embeddings. Hybrid search combines the best of semantic search and keyword search to deliver accurate and relevant results. While keyword search focuses on matching exact terms and phrases, semantic search understands the context and meaning behind the words. Hybrid search leverages both approaches to enhance the accuracy and relevance of search results by combining text and image data for comprehensive analysis.",
  },
  {
    question: "What types of cars can I find on AutoLabz?",
    answer:
      "AutoLabz lists all sorts of cars, from sports cars to American muscle, JDM cars, and more. Whether you're a car enthusiast looking for a specific model or a casual buyer searching for a reliable daily driver, AutoLabz is the perfect place to find your dream car.",
  },
  {
    question: "Can AutoLabz help me find cars with specific features?",
    answer:
      "Yes, AutoLabz is designed to understand detailed queries and can help you find cars with specific features, such as make, model, year, and color, using its advanced NLP capabilities. For instance, you can search 'Show me blue SUVs from 2018' and get precise matches.",
  },
  {
    question: "How quickly can I expect results from AutoLabz?",
    answer:
      "AutoLabz is optimized for fast performance and typically provides search results within seconds, thanks to its efficient algorithms and optimized backend infrastructure. Our modern and easy-to-use UI ensures a smooth and responsive user experience.",
  },
];

export function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/2 lg:py-[32px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
            Frequently Asked Questions
          </h3>
          <h1 className="py-4 text-2xl font-medium text-[#ffffff] lg:text-[42px] lg:leading-[58px]">
            Let&apos;s clarify some of your questions
          </h1>
          <p className="text-[#CCCCCC] pb-[24px]">
            Learn more about how AutoLabz uses advanced machine learning and NLP techniques to provide the best car search experience.
          </p>
        </div>

        <div className="lg:w-1/2">
          <Accordion.Root type="multiple" className="flex flex-col gap-y-4">
            {items.map((item, index) => (
              <div key={index}>
                <Accordion.Item
                  value={`item-${index + 1}`}
                  className="bg-transparent p-[16px] rounded-[8px] hover:bg-white hover:bg-opacity-5 transition-colors"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="flex w-full items-center justify-between text-white transition-colors"
                      onClick={() => handleToggle(`item-${index + 1}`)}
                    >
                      <p className="text-left font-medium lg:text-[18px]">
                        {item.question}
                      </p>
                      <span
                        className={`transition-transform duration-200 ease-out ${
                          openItems.includes(`item-${index + 1}`)
                            ? "rotate-45"
                            : "rotate-0"
                        }`}
                      >
                        <Image
                          src={Plus}
                          alt="See more"
                          className="h-10 w-10 lg:w-6 lg:h-6 filter invert"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content>
                    <p className="pt-2 text-[#CCCCCC]">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
