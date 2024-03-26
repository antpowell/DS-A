'use client'
import Image from 'next/image';
import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';


export interface GIF {
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    content_url: string;
}

// const GifSection = (gifs:Array<GIf> ) =>{

//     const gifsection = <>
//     {
//         gifs.forEach((gif, index) => {
//           <div key={gif.id}>
//               <i src={gif.url}></i>
//           </div>
//         })
//     }
//     </>;


//   return (<></>)
// }




export default function Home() {
    const key = `pToF9vgGtxRuCD192XkxmfWlB0CelCQb`;

    const [inputSearchValue, inputSearachVlaueSet] = useState();
    const [gifs, setGifs] = useState();


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()


        const inputVal: HTMLInputElement = document.getElementById('inputValue') as HTMLInputElement;

        console.log(inputVal.value);


        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${inputVal.value}`);

        // Handle response if necessary
        const data = await response.json()
        console.log(data);
        setGifs(data);
    }

    <form onSubmit={onSubmit}>
        <input type="text" name="name" style={{ backgroundColor: 'black' }} id='inputValue' />
        <button type="submit">Submit</button>

        <>
            {
            }
        </>
    </form>
  )

}