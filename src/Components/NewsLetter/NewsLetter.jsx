import './NewsLetter.css';
const NewsLetter = () =>{
    return (
        <div className="newsLetter">
            <h1>Get Exclusive offers on your mail</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Enter your email Id"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter