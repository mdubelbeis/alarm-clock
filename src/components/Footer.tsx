import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 py-4 flex flex-col justify-center items-center bg-black w-screen text-white">
      <div>
        <small>Designed and Developed by: </small>
        <a href="https://www.masondubelbeis.com" className="text-blue-500 p-2">
          Mason J. Dubelbeis
        </a>
      </div>
      <div>
        <small>&copy; 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
