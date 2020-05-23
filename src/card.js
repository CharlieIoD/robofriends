/* eslint-disable no-template-curly-in-string */
import React from 'react';

const Card = ({name, email, id}) => {
    return(
      // This is JSX, not HTML, so React is needed, as above
      // Will only return 1 element, so nothing outside the main <div>
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>  
    );
}
export default Card;