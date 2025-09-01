import React from 'react'
import {categoriesData} from './data'

const CategoryList = ({activeClass, handleCategory}) => {
    return (
        <>
            <button className={`btn btn-outline-dark btn-sm ${activeClass === '' ? 'active' : ''}`} data-filter="all" type="button" onClick={() => handleCategory('')}>All</button>
            {categoriesData.length > 0 && categoriesData.map((category, index) => {
                return (
                    <button className={`btn btn-outline-dark btn-sm ${activeClass === category ? 'active' : ''}`} data-filter={category.toLocaleLowerCase()} key={index} onClick={() => handleCategory(category)}>{category}</button>
                )
            })}
        </>
    )
}

export default CategoryList