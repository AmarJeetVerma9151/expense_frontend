import React, { useState } from 'react'

const Trial = () => {
    const [arr, setarr] = useState([
        {
            id: 1,
            name: "one",
            price: 34
        },
        {
            id: 2,
            name: "two",
            price: 43
        },
    ]);
    // const [data, setdata] = useState('');
    const [selectedId, setselectedId] = useState("");
    const [obj, setObj] = useState("");
    const handleDoubleClick = (item) => {

        console.log(item)
        setselectedId(item.id)
        setObj(item)
        // setvalue(true)
        // console.log(e.target.value)
    }

    const handleInputChanger = (e)=>{
            setObj({...obj,[e.target.name]:e.target.value});
    }

    const submitUpdate = ()=>{
            let findIndex = arr.findIndex((ele)=>ele.id === selectedId)
            let copyArr = [...arr]
            copyArr[findIndex] = obj
            setarr(copyArr)
        setselectedId('')
        setObj('')
    }
    return (
        <div>

            <h3>This is trial page</h3>

            {arr.map((ele, i) => {
                return <div key={i} className='flex gap-2 items-center justify-evenly'>

                   {ele.id===selectedId? <div className='flex gap-24 justify-evenly'>
                        <input className='border min-w-32 border-orange-300' value={obj.name} onChange={handleInputChanger} name='name' type="text" />
                        <input className='border min-w-32 border-orange-300' value={obj.price} onChange={handleInputChanger} name='price' type="number" />
                        <button className='py-1 px-4 bg-blue-950 rounded-md hover:bg-blue-700' onClick={submitUpdate}>update Item</button>
                    </div>
                        :
                  <div className='flex gap-24 justify-evenly'>
                    <span className='border border-orange-300 min-w-32' onDoubleClick={()=>handleDoubleClick(ele)}>{ele.name}</span>
                    <span className='border border-orange-300 min-w-32' onDoubleClick={()=>handleDoubleClick(ele)}>{ele.price}</span>
                  </div>}
                    <button className='py-1 px-4 bg-green-900 rounded-md hover:bg-green-700'>dele</button>


                </div>
            })}

        </div>
    )
}

export default Trial
