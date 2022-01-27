import React, { useState } from 'react';
//import { FaStar } from 'react-icons/fa'

/*export const StarRanking = (props) => {
  const [rating, setRating] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 0;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(props.ratingValue)}
            />
            <FaStar color={ratingValue < rating ? "#01af93" : "#bbb"} />
          </label>
        )
      })}
    </>
  )
}
*/
export const StarRanking = (props) => {
  return (
    <fieldset class="r-radios">
      <legend>
        Rate my rating system:
      </legend>

      <input type="radio" name="r_input" id="r_input_0" defaultChecked>
        <label htmlFor="r_input_0" className="r-radio r-radio--none">
          <svg aria-hidden="true" focusable="false">
            <use href="#no_rating" />
          </svg>
          <span>No rating</span>
        </label>
      </input>

      <input type="radio" name="r_input" id="r_input_1">
        <label htmlFor="r_input_1" className="r-radio">
          <svg aria-hidden="true" focusable="false">
            <use href="#star" />
          </svg>
          <span>1 Star</span>
        </label>
      </input>

    </fieldset>
  )
}
