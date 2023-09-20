import React from 'react'
import s from './style.module.css'
import GoogleMap from './GoogleMap'

export default function Footer() {
  return (
    <div className={s.google}>
		  <GoogleMap />
		{/* <div className={s.h5}>
        <h6>The Best Shop For The Best goods (c)</h6>
      <h6>2023</h6> </div> */}
    </div>
  )
}
