import React, { useState } from 'react'

const Input = () => {

	const [topLeft, setTopLeft] = useState(0)
	const [bottomLeft, setBottomLeft] = useState(0)
	const [topRight, setTopRight] = useState(0)
	const [bottomRight, setBottomRight] = useState(0)


	const boxStyle = {
		borderTopLeftRadius: `${topLeft}px`,
		borderBottomLeftRadius: `${bottomLeft}px`,
		borderTopRightRadius: `${topRight}px`,
		borderBottomRightRadius: `${bottomRight}px`
	}

  return (
	<div className='w-full h-[100dvh] bg-gray-600 flex gap-[20px] justify-center items-center'>
		<div className='flex flex-col gap-[300px]'>
			<input type="number" className='w-[100px] text-[20px] pl-[6px]' onChange={(e) => setTopLeft(e.target.value)} />
			<input type="number" className='w-[100px] text-[20px] pl-[6px]' onChange={(e) => setBottomLeft(e.target.value)}/>
		</div>
		<div className={`w-[300px] h-[300px] bg-white myBox`} style={boxStyle}>

		</div>
		<div className='flex flex-col gap-[300px]'>
			<input type="number" className='w-[100px] text-[20px] pl-[6px]' onChange={(e) => setTopRight(e.target.value)} />
			<input type="number" className='w-[100px] text-[20px] pl-[6px]' onChange={(e) => setBottomRight(e.target.value)} />
		</div>


	</div>
  )
}

export default Input