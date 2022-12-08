import React from "react";

const Candy = (props) => {



  const name = props.candy.name
  const image = props.candy.imageUrl
  const qty = props.candy.quantity



  return (
    <div className='candy'>

      <span><img src={image} width="50px"/>| {name} | qty: {qty}</span>

    </div>
  )

}

export default Candy
