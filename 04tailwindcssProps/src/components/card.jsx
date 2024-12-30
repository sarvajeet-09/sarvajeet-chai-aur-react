import React from 'react'

 function card({name,btnText}) {
     console.log("props", name);
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            {/* <h1 className="font-bold ">Bored ape nft accidental</h1> */}
            {/* <h1>Price</h1> */}
          </div>
          <div className="flex text-white  justify-between">
            <p>{name}</p>
            <p>{name}</p>
          </div>
          <div className="para text-white ">
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam quibusdam </p>
            <button className="btn text-white bg-black border-white">{btnText || "visit me"}</button>
          </div>
        </div>
      </div>
  )
}
export default card