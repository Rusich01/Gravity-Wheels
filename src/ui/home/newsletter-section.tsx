import { useState, type FormEvent } from "react";
import { TbCheck } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="border-t border-white/10 bg-black px-8 py-14 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="mb-1 text-xl font-bold uppercase text-white">
            Stay in the loop
          </h3>
          <p className="text-sm text-gray-400">
            Get the latest updates, new arrivals, and exclusive offers.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 sm:flex-row md:w-auto"
        >
          {isSubscribed ? (
            <p className="flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-400">
              <TbCheck />
              You&apos;re subscribed!
            </p>
          ) : (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-[#141414] px-5 py-3 text-sm text-white outline-none focus:border-green-500 sm:w-72"
              />

              <button
                type="submit"
                className="rounded-full bg-green-500 px-6 py-3 text-sm font-bold uppercase text-black transition duration-150 hover:bg-green-400 active:scale-95"
              >
                Subscribe
              </button>
            </>
          )}
        </form>

        <div className="flex gap-4 text-lg text-gray-400">
          <a
            href="#"
            className="transition hover:text-green-500"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="transition hover:text-green-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="transition hover:text-green-500"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
