import React from 'react'

function Cards({item}) {
    console.log(item,'ii');
  return (
    <>
    <div className='mt-4 mb-4'>
<div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt={item.id} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category }</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-300 ease-in-out hover:text-white p-2 rounded-md">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
