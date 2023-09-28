import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <section aria-label="Site Footer" className=" bg-base-300 text-white flex flex-col md:flex-row py-3 justify-center items-center">
          <p className="text-xs text-gray-500">
            Website created with ❤️ by <Link href="https://luongkhoa.io.vn/" className="text-gray-500 transition hover:opacity-75">Lương Khoa</Link>
          </p>
      </section>
    </footer>
  )
}

export default Footer