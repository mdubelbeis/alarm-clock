import { useState } from "react";

import Icons from "../components/ui/Icons";

const About: React.FC = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleModal = () => {
    setShowAboutModal(!showAboutModal);
  };

  return (
    <section>
      <div className="fixed bottom-24 right-6">
        {!showAboutModal && (
          <div onClick={handleModal}>
            <Icons
              id="aboutIcon"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              width="w-10"
            />
          </div>
        )}
      </div>
      {showAboutModal && (
        <div className="flex justify-center">
          <div
            id="modalBackdrop"
            className="absolute top-0 left-0 h-screen w-screen bg-slate-100 opacity-90"
          ></div>
          <div className="fixed w-10/12 mx-auto text-center p-10 shadow-lg bg-white flex flex-col items-center gap-10">
            <div className="border-b-2 text-center border-slate-100 w-full max-w-xl mx-auto">
              <h1 className="text-2xl p-4">What is Multi-Tool?</h1>
            </div>
            <div className="max-w-xl mx-auto">
              <p>
                Multi-Tool is a web application which bundles multi-purpose
                applications for easy mobile or desktop use that can help with
                completing your daily tasks.
              </p>
            </div>
            <div onClick={handleModal} className="absolute top-4 right-4">
              <Icons d="M6 18L18 6M6 6l12 12" id="closeMenuIcon" width="w-10" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
