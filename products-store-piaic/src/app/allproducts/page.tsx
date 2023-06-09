import React from 'react'
import ProductCard from '../components/ProductCard'
import Wrapper from '../components/Wrapper'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'


const AllProducts = () => {
  console.log("recipes")
  return (
    <section>
      <Wrapper>
        {/* ALL PRODUCTS CONTAINER - START */}
        <div className='grid grid-cols-4 gap-y-16'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
          {/* ALL PRODUCTS CONTAINER - END */}
      </Wrapper>
    </section>
  )
}

export default AllProducts