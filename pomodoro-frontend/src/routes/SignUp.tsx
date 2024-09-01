import {useState, FormEvent } from 'react'
import { Link } from 'react-router-dom';


function SignUp() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const handleSubmit = (e :  FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (password != confirmPassword){
            alert("Passwords are not the same")
        }

        //do a backend call 


        


        clear()


    }

    const clear = () =>{
        setName("")
        setPassword("")
        setEmail("")
        setConfirmPassword("")
    }

  return (
    <div className='w-full h-full bg-custom-gradient text-white flex flex-col items-center justify-center'>
<div className="max-w-md w-2/5 mx-auto my-8 p-6 bg-custom-gradient rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Sign Up</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-700"
        placeholder="Enter your name"
      />
    </div>
    <div>
  <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
  <input
    id="email"
    value={email}
    onChange={(e) => {
        console.log(e.target.value); 
        setEmail(e.target.value);
      }}
    type="email"
    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-700"
    placeholder="Enter your email"
  />
</div>
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
      <input
      value={password}
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
        placeholder="Enter your password"
      />
    </div>
    <div>
        <label className='"block text-sm font-medium text-gray-700'>Confirm Password</label>
        <input
            id='confirm-password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            placeholder="Reenter your password"
            className='mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400'>
            
        </input>
    </div>
    <button
      type="submit"
      className="w-full bg-slate-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
    >
      Sign Up
    </button>
  </form >
  <h1 className="text-center mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </h1>
</div>


    </div>
  )
}

export default SignUp