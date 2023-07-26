import React from 'react';

const MenuCard = ({ menuDatas }) => {
    return (
        <>
            <section className=' main-card-container'>
                {
                    menuDatas.map((curElem) => {
                        const { id, category, name, description, image, price } = curElem;

                        return (
                            <>
                                <div className='card' key={id}>
                                    <span className='card-number subtle'>{id}</span>
                                    <span className='card-category subtle'>{category}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className='card-description subtle'>{description}</span>
                                    <div className='card-read'>Read More</div>
                                    <img src={image} alt="image" />
                                    <span className='card-btn subtle'>Order Now</span>

                                </div>
                            </>
                        )

                    })
                }
            </section>
        </>
    )

}

export default MenuCard