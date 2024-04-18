import React, { useEffect, useState } from 'react'
import Data from '../Shared/Data';
import CategoryItem from './CategoryItem';

function CategoryList({ setSelectedCategory }) {
    const [category, setCategory] = useState();
    const [selectedCategory, setSelectedCategory_] = useState();

    useEffect(() => {
        setCategory(Data.CategoryListData)
    }, [])
    return (
        <div>
            <h2 className='text-lg mt-3 font-light mb-3'>Select Your Favourite Category</h2>
            {category ? <div className='flex gap-6 mb-5'>
                {category?.map((item, index) => (
                    <div key={index} onClick={() => { setSelectedCategory(item.value); setSelectedCategory_(item) }}>
                        <CategoryItem category={item} selectedCategory={selectedCategory} />
                    </div>
                ))}
            </div> : null}
        </div>
    )
}

export default CategoryList