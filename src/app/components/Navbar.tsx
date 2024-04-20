/* eslint-disable @next/next/no-img-element */
''
import { auth,signIn,signOut } from 'auth'
import React from 'react'
const Navbar = async () => {
    const session = await auth();
    return (
        <>
        <div className="navbar bg-gray-100 w-full max-w-screen-lg px-4 py-2 rounded-xl mt-5">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-black text-xl">upIdea</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white" />
                </div>
                <div className="dropdown dropdown-end">
                    { session && session.user ? 
                        (
                        <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Avatar" src={`${session.user.image}`} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                        <li>
                            <a href="#" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href="#">Settings</a></li>
                        <li>
                            <form action={async () => {
                                "use server"
                                await signOut()
                            }}>
                                <button type='submit'>Sign Out</button>
                            </form>
                        </li>
                    </ul>
                    </>
                ) : 
                    (<form action={ async () => {
                        "use server"
                        await signIn()
                    }}>
                        <button type='submit' className='btn btn-ghost text-black'>Sign In</button>
                    </form>)
                }
                </div>
            </div>
        </div>
        <div className=' absolute right-0 mr-10 mt-5'>
           <a href='/submit'>
               <button className="btn btn-primary text-white">Submit An Idea</button>
            </a>
        </div>
        </>
  )
}
export default Navbar
