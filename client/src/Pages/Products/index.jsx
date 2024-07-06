import React from 'react'
import Catalog from './Catalog'
import CardSlider from '../../Components/CardSlider'

export default function Products() {
  return (
    <>
    {/* card slider */}
    <CardSlider catalogs={2}/>
    {/* catalog */}
    <Catalog/>
    </>
  )
}
