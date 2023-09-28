import React from 'react'

function GoToTop() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className='fixed bg-black bottom-4 right-4 p-2 rounded-full cursor-pointer' onClick={scrollToTop}>
        <img className='w-8 h-8' src="/svg/up.svg" alt=""/>
    </div>
  )
}
export default GoToTop