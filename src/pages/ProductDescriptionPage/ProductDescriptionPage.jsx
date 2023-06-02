import React from 'react'
import s from './style.module.css'
import { useParams } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import { useSelector } from 'react-redux'

export default function ProductDescriptionPage() {
  
    const {id} = useParams()
    const products = useSelector(state => state.products)
    const product = products.find(elem => elem.id === +id)
 
  return (
    <ProductDescription {...product}/>
    
  )
}
