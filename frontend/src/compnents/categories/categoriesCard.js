import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/actions/actions';
import { getCategoriesById } from '../../redux/actions/actions';
import st from './category.module.css';

const CategoryCard = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.getCategories.data.data);
    console.log(categories);
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const categoryId = useSelector((state) => state.getCategoriesById.data.data);
    useEffect(() => {
        dispatch(getCategoriesById(id));
    }, [dispatch, id]);

    const search = (title) => {
        let product_card = document.querySelectorAll('#products_id a');
        product_card.forEach(elem => {
            elem.classList.add('hide_card')
            if (elem.childNodes[1].childNodes[0].innerHTML.toLowerCase().includes(title.toLowerCase())) {
                elem.classList.remove('hide_card');
            }
        })
    }




    return (
        <section>
            <div className={st.panel}>
                <div className={st.filter_elems}>
                    <Link to="/categories" className={st.filter_elem}><h3 className={st.all_products}>Все продукты</h3></Link>
                    {categories && categories.map(elem => (

                        <Link to={`/category/${elem.id}`} key={elem.id} className={st.filter_elem}>
                            {id === elem.id ? <h3 className={st.active_category}>{elem.title}</h3> : <h3>{elem.title}</h3>}
                        </Link>

                    ))}
                </div>
                <input placeholder='search' onKeyUp={e => search(e.target.value)}></input>
            </div>
            <div className={st.products}>
                {categoryId && categoryId.products && categoryId.products.map(elem => (
                    <Link to={`/product/${elem.id}`} className={st.product} key={elem.id}>
                        <div className={st.img_container}>
                            <img src={`http://localhost:1337${elem.image && elem.image[0] && elem.image[0].url}`} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <h3 className='product_title'>{elem.title}</h3>
                            <p>{elem.description}</p>
                        </div>
                    </Link>
                ))}
                {/* <Query query={CATEGORY_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div className={st.filter_elems}>
                                <Link to="/categories" className={st.filter_elem}><h3>Все продукты</h3></Link>
                                {categories && categories.map(elem => (
                                    <Link to={`/category/${elem.id}`} className={st.filter_elem} key={elem.id}>
                                        <h3>{elem.title}</h3>
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query> */}

            </div>
            {/* <div>
                <Query query={CATEGORY_CARD_QUERY} id={id}>
                    {({ data: { category } }) => {
                        return (
                            <div className={st.products} id="products_id">
                                {category.products && category.products.map(elem => (
                                    <Link to={`/product/${elem.id}`} className={st.product} key={elem.id}>
                                        <div className={st.img_container}>
                                            <img src={'http://localhost:1337' + elem.image[0].url} alt="img"></img>
                                        </div>
                                        <div className={st.text_container}>
                                            <h3 className='product_title'>{elem.title}</h3>
                                            <p>{elem.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query>
            </div> */}
            <div>
                <div>none</div>
                {/* <Query query={CATEGORY_CARD_QUERY} id={id}>
                    {
                        console.log(id)
                    }
                    
                </Query> */}
            </div>
        </section>
    )
}

export default CategoryCard;