import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    useEffect(()=>{
        setMobileMenuOpen(false);
    }, [router.asPath])

    return (
    <>  
    <div className="navbar fixed top-0 z-50 bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-primary btn-circle">
        Menu
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
        <li className=' font-bold'><Link href="/">Single Rewind</Link></li>
        <li className=' font-bold'><Link href="/double">Double Rewind</Link></li>
        <li className=' font-bold'><Link href="/time">Time Rewind</Link></li>
        <li className=' font-bold'><Link href="/hero">Skill Tree</Link></li>
        {/* <li className=' font-bold'><Link href="/process">Share Process</Link></li> */}
        <li className=' font-bold'><Link href="/docs">Document</Link></li>
        <li className='text-lime-500 font-bold'><Link href="https://check-rewind.netlify.app/" target='_blank'>CheckCost V1</Link></li>
        <li className='text-sky-300 font-bold'><Link href="https://daysbygone.vercel.app/" target='_blank'>Blog</Link></li>
        <li className='text-red-500 font-bold'><Link href="https://luongkhoa.io.vn/" target='_blank'>Contact</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link href="/" className="btn btn-ghost normal-case text-xl">CheckCost <b className='text-red-500'>🇻🇳</b></Link>
  </div>
  <div className="navbar-end">
    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>



<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Game ít thôi nghiện quá rồi!</h3>
    <p className="py-4">Cảm ơn bạn đã ghé vào đây, có thắc mắc hoặc bổ sung thì hãy liên hệ tôi!</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <a className='btn mr-4 text-red-500' target='_blank' href='https://luongkhoa.io.vn/'>Liên hệ</a>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
    )
}

export default NavBar