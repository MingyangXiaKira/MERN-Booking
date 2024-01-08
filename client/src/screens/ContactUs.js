import React from "react";
import Head from "../components/Head";
import Layout from "../layout/Layout";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

function ContactUs() {
  const contactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow empowered for process-centric total linkage.",
      icon: FiMail,
      contact: "mingyangxia.career@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
      icon: FiPhoneCall,
      contact: "**************",
    },
    {
      id: 3,
      title: "Location",
      info: "Dublin, Ireland",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Contact us" />
        <div className="grid md:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {contactData.map((data) => (
            <div key={data.id} className="border p-10 rounded-lg text-center">
              <span className="flex justify-center text-4xl text-subMain mb-4">
                <data.icon />
              </span>
              <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
              <p className="mb-0 text-base opacity-90 leading-7">
                <a href={`mailto:${data.contact}`} className="text-main">
                  {data.contact}
                </a>{" "}
                {data.info}
              </p>
            </div>
          ))}
        </div>
        {/* map */}
        <div className="my-20">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAy5afdOcPU6u8JVlym8FPfj3rkLgr14QA&q=dublin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
