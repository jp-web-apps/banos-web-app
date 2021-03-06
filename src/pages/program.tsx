import React from "react";
import Head from "next/head";

import { Header, Container, Breadcrums, ButtonOutlined } from "../components";

export default function Home() {
  const links = [
    { href: "/", title: "Home" },
    { href: "/", title: "Banos" },
    { href: "/", title: "Activities" },
    { href: "/", title: "Rafting" },
  ];

  const tags = [
    { title: "Location", description: "Rio blanco" },
    { title: "Duration", description: "1/2 day" },
    { title: "Min age", description: "18 years" },
    { title: "Min pax", description: "min 2" },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Container size="md">
        <Breadcrums links={links} />

        <div className="lg:flex lg:justify-between mb-8">
          <div>
            <h1 className="text-gray-700 text-5xl font-semibold mb-2">
              Canyoning en Baños Ecuador
            </h1>
            {/* tags */}
            <div className="grid grid-cols-4 lg:flex mb-8 lg:mb-0">
              {tags.map((tag) => (
                <div className="mr-4">
                  <div className="inline-block font-semibold text-gray-600">
                    {tag.title}:
                  </div>{" "}
                  <div className="inline-block text-gray-400">
                    {tag.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <ButtonOutlined
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              }
            />
            <ButtonOutlined
              className="ml-2"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
            />
            <ButtonOutlined
              className="ml-2"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              }
            />
            <ButtonOutlined
              className="ml-2"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </Container>

      <Container size="lg">
        <div className="relative mb-8 rounded-3xl w-full lg:w-full h-[200px] lg:h-[500px] lg:mb-0 m-auto overflow-hidden">
          <div className="absolute z-0 top-0 left-0 w-full h-full ">
            <img
              src="https://v1.nitrocdn.com/PlCATPkBFeOnftDsPDvpHIHaHyykpjHs/assets/static/optimized/rev-77f359a/wp-content/uploads/2016/06/extreme-canyoning-banos-ecuador4-960x640.jpg"
              alt="cover"
              className="w-full absolute top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="absolute z-10 top-0 left-0 w-full h-full bg-black lg:opacity-60 opacity-10"></div>
        </div>
      </Container>

      <Container size="md">
        <div className="relative mb-8 z-20 m-auto bg-white w-full py-4 lg:py-0 lg:h-[100px] lg:-mt-[50px] border border-gray-200 lg:border-0 lg:shadow-md rounded-3xl lg:grid lg:grid-cols-4">
          <div className="flex items-center px-8 py-2 lg:py-0 lg:border-r lg:border-gray-100">
            <div className="mr-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div>
              <div className="text-gray-400 text-sm font-light">
                Choose your activity:
              </div>
              <div className="text-gray-700 text-xl">
                Canyoning en Banos Ecuador
              </div>
            </div>
          </div>
          <div className="flex items-center px-8 py-2 lg:py-0 lg:border-r lg:border-gray-100">
            <div className="mr-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-gray-400 text-sm font-light">Date:</div>
              <div className="text-gray-700 text-xl">
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center px-8 py-2 lg:py-0 lg:border-r lg:border-gray-100">
            <div className="mr-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-gray-400 text-sm font-light">
                How many people:
              </div>
              <div className="text-gray-700 text-xl">
                <select name="pets">
                  <option value="dog">1 person</option>
                  <option value="cat">2 persons</option>
                  <option value="cat">3 persons</option>
                  <option value="cat">4 persons</option>
                  <option value="cat">5 persons</option>
                  <option value="cat">6 persons</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center px-8 py-2 lg:py-0">
            <div className="inline-flex items-center justify-center font-semibold h-12 bg-red-400 hover:bg-red-600 active:bg-red-800 cursor-pointer text-white w-full rounded-full select-none">
              Buy now
            </div>
          </div>
        </div>
      </Container>

      <div className="h-[500px]"></div>
    </div>
  );
}
