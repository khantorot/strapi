import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import Query from '../query/query';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/actions/actions';
import { getProducts } from '../../redux/actions/actions';

// import CATEGORY_QUERY from '../queries/category/category';
// import PRODUCT_QUERY from '../queries/product/product';
import st from './category.module.css';


const Categories = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.getCategories.data.data);
    const products = useSelector((state) => state.getProducts.data.data);
    console.log(products);
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);



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
            <div>
            <div className={st.products} id="products_id">
                {products && products.map(elem => (
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
                </div>
                {/* <div className={st.products} id="products_id">
                            {category.blogs && category.blogs.map(elem => (
                                <Link to={`/product/${elem.id}`} className={st.product} key={elem.id}>
                                    <div className={st.img_container}>
                                        <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                    </div>
                                    <div className={st.text_container}>
                                        <h3 className='product_title'>{elem.name}</h3>
                                        <p>{elem.info}</p>
                                    </div>
                                </Link>
                            ))}
                        </div> */}
            </div>
        </section>
    )
}

export default Categories;