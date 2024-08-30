import React from 'react'

export default function Rating(props:any) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <span
            key={star}
            className='start text-sm md:text-xl'
            style={{
              cursor: 'pointer',
              color: props.rate >= star ? 'gold' : 'gray',
            }}
            onClick={() => {
              props.setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}
