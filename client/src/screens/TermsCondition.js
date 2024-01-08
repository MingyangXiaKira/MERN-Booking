import React from "react";
import Head from "../components/Head";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const TermAndConditions = () => {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Terms & Conditions" />
        <div className="bg-white my-12">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Welcome to OnlineShop Market!
            </h2>
            <div className="font-sans leading-7">
              <p>
                Lorem velit aliqua sit sint irure aute cupidatat. Incididunt
                minim cupidatat est esse adipisicing enim proident officia
                labore excepteur sint. Aliqua pariatur laborum dolore dolore
                quis officia non ullamco veniam tempor ad. Duis eu excepteur
                nisi laborum magna non. Sunt reprehenderit dolore culpa id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
