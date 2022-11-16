import React from 'react';
import Link from 'next/link';
// types
import type { NextPage } from 'next';

const ErrorPage: NextPage = (): JSX.Element => {
  return (
    <div className="mx-auto grid min-h-screen max-w-max place-items-center bg-white p-5">
      <div className="sm:flex">
        <p className="text-4xl font-extrabold tracking-tight text-gray-600 sm:text-5xl">
          404
        </p>

        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>

            <p className="mt-3 text-base text-gray-500">
              Please check the URL in the address bar and try again.
            </p>
          </div>

          <div className="mt-5 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Go back home
              </a>
            </Link>

            <a
              href="#"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
