import { socialMedia, year } from "@/helpers/social-media/helper";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-[#cccbcb] px-8 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
        <div>
          <p className="text-2xl font-semibold text-white">Gravity Wheels</p>
          <p className="text-sm text-gray-400 mt-1">
            Experience Speed and Style
          </p>
        </div>

        <ul className="flex gap-6 text-lg">
          {(socialMedia ?? []).map(({ icon: Icon, href }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-green-500 duration-150 cursor-pointer"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {year} Gravity Wheels. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
