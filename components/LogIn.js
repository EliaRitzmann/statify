import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
export const LogIn = () => {
  return (
    <div>
      <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="xl:w-10/12">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="flex justify-center flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-24 w-24 text-sky-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                          Log in to use Statify
                        </h4>
                      </div>
                      <p class="mb-4">Please contact elia.ritzmann@stud.altekanti.ch to ask for permision to use this app.</p>
                      <button
                            class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-green-500 hover:bg-green-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onCLick={() => signIn("spotify")}
                          >
                            Log in with Spotify
                          </button>
                      
                    </div>
                  </div>
                  <div class="lg:w-6/12 flex items-center justify-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-tr from-green-500 to-sky-500">
                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 32 32"
                        version="1.1"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        className="fill-white w-full"
                      >
                        <path d="M4 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM8 11c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1v-8c0-.6-.4-1-1-1zM12 6c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1zM16 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM20 9c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V10c0-.6-.4-1-1-1zM24 6c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1zM28 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
