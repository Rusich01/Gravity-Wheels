const HeaderList = () => {
  return (
    <ul className="flex gap-4 text-[#cccbcb] ">
      <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer">
        <a href="#">Home</a>
      </li>
      <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer">
        <a href="#">Bikes</a>
      </li>

      <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer">
        <a href="#">Accessories</a>
      </li>

      <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer">
        <a href="#">About</a>
      </li>

      <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default HeaderList;
