import React from 'react'
import { list } from './data'
import OfferItem from '../OfferItem'


export default function Offers() {
  return (
    <div>
        <h2>Актуальные спецпредложения</h2>
        <div>
            {
                list.map(item => <OfferItem key={item.id} {...item} />)
            }
        </div>
    </div>
  )
}
