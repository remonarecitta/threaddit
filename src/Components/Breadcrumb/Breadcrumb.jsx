import './Breadcrumb.css';
import arrow from '../Assets/breadcrumb.png';

const Breadcrumb = (props) =>{
    const {product} = props;
    return (
        <div className='Breadcrumb'>
            HOME <img src={arrow}/> SHOP <img src={arrow}/> {product.brand || product.category} <img src={arrow}/> {product.title}
        </div>
    )
}

export default Breadcrumb;