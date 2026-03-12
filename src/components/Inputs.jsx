import React, { useState } from 'react'
import Profile from './profile'

const Inputs = () => {

    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")

    const savedData = JSON.parse(localStorage.getItem("data"))
    const [allData, setAllData] = useState(savedData)
    localStorage.setItem("data",JSON.stringify(allData))

    function submitHandler(e) {
        e.preventDefault();

        let oldData = [...allData]
        oldData.push({name,img,mobile,address});
        setAllData(oldData)

        setName("");
        setImg("")
        setMobile("")
        setAddress("")
    }
  
  return (
    <div className='flex flex-col h-screen'>
    <div>
        <form className='w-full bg-black py-7 px-12 flex justify-center flex-wrap gap-8' onSubmit={submitHandler}>
            <input 
            className='text-white border-2 h-15 px-5 rounded text-2xl w-[48%] border-white' 
            type="text" 
            placeholder='name'
            value={name}
            required
            onChange={(e)=>{
               setName(e.target.value)
            }}
            />
            <input 
            className='text-white border-2 h-15 px-5 rounded text-2xl w-[48%] border-white' 
            type="text" 
            placeholder='img link'
            value={img}
            required
            onChange={(e)=>{
               setImg(e.target.value)
            }}
            />
            <input 
            className='text-white border-2 h-15 px-5 rounded text-2xl w-[48%] border-white' 
            type="text" 
            placeholder='mobile no.'
            value={mobile}
            required
            onChange={(e)=>{
               setMobile(e.target.value)
            }}
            />
            <input 
            className='text-white border-2 h-15 px-5 rounded text-2xl w-[48%] border-white' 
            type="text" 
            placeholder='address'
            value={address}
            required
            onChange={(e)=>{
               setAddress(e.target.value)
            }}
            />
            <button className='text-white border-2 border-white h-13 bg-green-600 cursor-pointer rounded px-5 py-1 w-[60%] active:scale-99 text-xl'>Create</button>
        </form>
    </div>
    <div className='flex-1 bg-black px-12 py-8 flex gap-10 overflow-x-auto whitespace-nowrap'>
        {allData.map((e,idx) => {
        return (<Profile key={idx} alldata={allData} setallData={setAllData} e={e} id={idx}/>)
    })}
    </div>
    </div>

  )
}

export default Inputs