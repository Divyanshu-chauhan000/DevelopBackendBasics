import React from 'react'
import { useState } from 'react'

const Card = () => {

    const[mark, setMarked] = useState([
            {
        name : "Shobhit",
        image: "https://i.pinimg.com/736x/ea/b0/0f/eab00f88585d5dbbb539ee7578f4b714.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, impedit qui sed vero distinctio quasi?",
        like : false
    },
    {
        name : "Rahul",
        image: "https://i.pinimg.com/736x/27/01/ed/2701edf92a01febbaa6ad949dae73b16.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, impedit qui sed vero distinctio quasi?",
        like : false
    },
    {
        name : "Anuj",
        image: "https://i.pinimg.com/736x/fa/eb/51/faeb513b42687551f66ea4da41bddd05.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, impedit qui sed vero distinctio quasi?",
        like : false
    },
    {
        name : "Divyanshu",
        image: "https://i.pinimg.com/736x/3c/f5/43/3cf543f992eb960b95c1613b9b085be1.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, impedit qui sed vero distinctio quasi?",
        like : false
    },
]);
    
   

  const handleClick = (index) =>{
      const updateLike = [...mark];
      updateLike[index].like = !updateLike[index].like;
      setMarked(updateLike);
  }
    
  return (
    <div className=' grid grid-cols-2 md:grid-cols-4 p-2 gap-3 justify-center items-center h-[100vh] bg-gray-700 '>
       {
        mark.map((val , index )=>(
            <div key={index} className='card bg-white  gap-5 flex flex-col items-center  text-center  rounded-md shadow-lg '>
           <h1 className='text-2xl pt-4 font-semibold'>{val.name}</h1>
           <img className='w-[120px] h-[150px] rounded-md' src={val.image} alt="" />
           <p className=' text-gray-900 '>{val.desc}</p>
           <div className='mb-3'>
            <button  onClick={()=>{handleClick(index)}} className='py-2 px-4 bg-gray-700 rounded-lg border  shadow-lg text-gray-200 hover:bg-white hover:text-gray-700' >{val.like ? "Liked" : "Like Me"}</button>
           </div>
       </div>
        ))
       }
    </div>
  )
}

export default Card
