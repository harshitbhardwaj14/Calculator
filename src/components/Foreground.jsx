import React, {useRef, useState} from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc:"Go to collage bro",
            filesize:".3mb",
            close:true,
            tag:{ isopen: true, tagtitle:"Dwonload Now", tagcolor:"blue" }
        },
        {
            desc:"Hey! Just a heads up for tonight's plans: we're meeting at the bar around 9 pm. Looking forward to making some awesome memories together tonight!",
            filesize:".7mb",
            close:false,
            tag:{ isopen: false, tagtitle:"Upload", tagcolor:"blue" }
        },
        {
            desc:"Dollar $ be dropping but ye koi recession nahi",
            filesize:".4mb",
            close:true,
            tag:{ isopen: true, tagtitle:"Dwonload Now", tagcolor:"green" }
        },
        {
            desc:"Untitled",
            filesize:".9mb",
            close:false,
            tag:{ isopen: true, tagtitle:"Upload", tagcolor:"red" }
        },
    ]
  return (
   <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-10 flex-wrap p-5'>  
   {data.map((item, index)=>(
    <Card data={item} reference={ref}/>
   ))}
 
   </div>
  )
}

export default Foreground
