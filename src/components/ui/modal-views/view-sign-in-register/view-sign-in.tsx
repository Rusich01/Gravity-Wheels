const ViewSignIn = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <button className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75">
        Sign In
      </button>
    </form>
  );
};

export default ViewSignIn;
