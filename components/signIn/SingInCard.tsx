const SignInCard = () => {
 
  return (
    <div className=" flex justify-center">
          <div className="p-[60px] bg-black bg-opacity-60 w-[450px] rounded">
            <div className="text-white text-3xl  font-bold pb-5">Sign In</div>
            <div className="flex flex-col gap-4 font-bold">
              <input
                placeholder="Email or phone number"
                className="p-3 rounded bg-black bg-opacity-60 border border-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded bg-black bg-opacity-60 border border-gray-500"
              />
            </div>
            <div className="pb-28">
              <button className="text-white mt-5 bg-red text-md font-bold text-center w-full py-2 rounded">
                Sign In
              </button>
              <div className="mt-5 text-center w-full text-gray-300">OR</div>
              <div className="mt-5 bg-gray-500 bg-opacity-40 py-2 rounded">
                <button className="text-white  w-full text-md font-bold ">
                  Use a Sign-in Code
                </button>
              </div>
              <div className="text-center mt-4 font-bold text-gray-300">
                Forgot Password?
              </div>
              <div className="flex mt-4 ">
                <input
                  type="checkbox"
                  className="accent-none mr-2  border border-gray-400"
                />
                <div className="font-semibold">Remember me</div>
              </div>
              <div className="flex gap-1  mt-3">
                <div className="text-gray-300   font-semibold">
                  New to Nerflix?
                </div>{" "}
                <div className="font-bold">Sign up now.</div>
              </div>
              <div className="mt-3 ">
                <span className="text-sm text-gray-400 ">
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot.{" "}
                </span>
                <span className="cursor-pointer text-blue-500 underline">
                  Learn more.
                </span>
              </div>
            </div>
          </div>
        </div>
  );
};
export default SignInCard;
