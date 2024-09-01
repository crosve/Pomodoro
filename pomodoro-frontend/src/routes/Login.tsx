import {FormEvent, useState} from 'react'
import {Link} from "react-router-dom"

function Login() {
    const [name, setName] = useState<string>("")
    const [ password, setPassword] = useState<string>("")
    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //do a backend call

    }
  return (
    <div className='w-full h-full bg-custom-gradient text-white flex flex-col items-center justify-center'>
    <div className="max-w-md w-2/5 mx-auto my-8 p-6 bg-custom-gradient rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>
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

        <button
          type="submit"
          className="w-full bg-slate-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
        >
          Login
        </button>
      </form >
      <h1 className="text-center mt-4 text-sm text-gray-600">
            Don't have an account{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Signup
            </Link>
          </h1>
    </div>
    
    
        </div>
  )
}

export default Login