import React from "react";
import Head from "../components/Head";
import Layout from "../layout/Layout";

function AboutUs() {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Head title="About us" />
        <div className="bg-white">
          <div className=" xl:p -20 pb-10 px-4">
            <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
              <div>
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                  About Online Shop
                </h3>
                <div className="mt-3 text-base opacity-90 leading-7">
                  <p>
                    Laborum aliquip elit laboris cillum dolor adipisicing
                    aliquip irure elit nostrud. Proident nulla voluptate
                    pariatur cillum deserunt elit qui non aute reprehenderit
                    laborum laboris aliquip. Sint ex irure qui pariatur ipsum
                    est. Dolor amet id nisi sunt aliquip reprehenderit labore
                    mollit mollit nostrud.
                  </p>

                  <p>
                    Ea consectetur Lorem proident in amet proident laboris
                    veniam do veniam laboris labore. Sunt sit sint dolor ad
                    pariatur eiusmod. Velit adipisicing proident officia in sint
                    non ea labore pariatur proident. Dolor consequat qui veniam
                    ut ad sint duis. Proident exercitation velit incididunt
                    ullamco occaecat reprehenderit est laboris in officia.
                    Aliqua eiusmod esse est incididunt exercitation fugiat
                    incididunt.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                  <div className="p-8 bg-deepest shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      10K
                    </span>
                    <h4 className="text-lg font-bold mb-1">Happy Customers</h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Ut sint ipsum minim incididunt fugiat culpa aliquip
                    </p>
                  </div>
                  <div className="p-8 bg-deepest shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      8K
                    </span>
                    <h4 className="text-lg font-bold mb-1">
                      Products Available
                    </h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Ut sint ipsum minim incididunt fugiat culpa aliquip
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="w-full  md:h-[600px] rounded shadow object-cover"
                  src="/images/about.WebP"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
