import React from "react";
import Head from "../components/Head";
import Layout from "../layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Privacy Policy" />
        <div className="bg-white my-12">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <div className="font-sans leading-7">
              <p>
                Lorem velit aliqua sit sint irure aute cupidatat. Incididunt
                minim cupidatat est esse adipisicing enim proident officia
                labore excepteur sint. Aliqua pariatur laborum dolore dolore
                quis officia non ullamco veniam tempor ad. Duis eu excepteur
                nisi laborum magna non. Sunt reprehenderit dolore culpa id.
              </p>
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

export default PrivacyPolicy;
