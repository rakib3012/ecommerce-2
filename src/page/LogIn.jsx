import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  { useState } from "react";
import { auth } from "../firebase/firebase";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "123456") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password");
    }
  };

  const provider = new GoogleAuthProvider;

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  // console.log("User is signed in:", user);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  const loginHandler = () => {
    console.log("Login button clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex py-25 items-center justify-center ">
      <div className="bg-transparent p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
           
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
          <p className="flex   gap-4">
            <span>I don't have any account </span>
            <button className="text-blue-500">Sing Up</button>
          </p>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <button  onClick={loginHandler} className="text-blue-500 mt-4 duration-300">
       <span className="flex gap-2 items-center hover:text-blue-400">  <FcGoogle className="text-2xl"/> Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
