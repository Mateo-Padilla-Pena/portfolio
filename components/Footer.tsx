import React from "react";

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-slate-800 py-8 px-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400">© 2025 {name}</p>
      </div>
    </footer>
  );
};

export default Footer;
