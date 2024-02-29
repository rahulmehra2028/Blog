import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400" , "700"]
})

export const metadata = {
    title: "About | My Blog",
    description: "About Page",
}


const aboutlayout = ({children}) => {
  return (
    <section className={roboto.className}>

        <h2>About layout</h2>
            {children}


    </section>
  )
}

export default aboutlayout