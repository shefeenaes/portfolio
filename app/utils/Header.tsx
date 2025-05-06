import React from "react";
interface TitleProps {
  title: string;
}
const Header: React.FC<TitleProps> = ({ title }) => {
  const titleMap = {
    about: 'console.log(" ABOUT ME ")',
    experience: 'print(" MY EXPERTISE ")',
    education: "import Education from shefeena's carrier print( Education)",
    contact: 'document.write(" Contact ");',
  };
  return <div>Header</div>;
};

export default Header;
