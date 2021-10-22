import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Content extends Component{
    render(){
        return(
            <div className="container">
            <div className="content-page">
                <div className="row foodview" style={{margin: "auto"}}>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://st2.depositphotos.com/3147737/5188/i/600/depositphotos_51888195-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Biriyani</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">5 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>Thinduakal Thalapakatti Rs.350</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top" src={"./asset/images/food1.jpg"} alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Dosa</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.5 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>South Indian Dosa Rs.100</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Idly</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.3 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>3 idly Rs.50</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top" src={"https://www.watscooking.com/images/dish/normal/1771.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Full Meals</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.5 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>South Indian style Sambar Rs.150</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Veg-fired rice</h4>
                                    </div>
                                    <div className="col">
                                        <p className="low-rating">3.9 <i className="fa fa-star" style={{fontSize: "10px"}}></i>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p>Pure veg Rs.80</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://d1uz88p17r663j.cloudfront.net/original/984a2927c718b0e9d01160918cb2f1f1_A42I2385.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Chiken-fried rice</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.8 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>Chines Rs.120</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://cdn.cdnparenting.com/articles/2020/02/26160524/Rava-Dosa-Recipe.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Rava Dosa</h4>
                                    </div>
                                    <div className="col">
                                        <p className="low-rating">3.5 <i className="fa fa-star" style={{fontSize: "10px"}}></i>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p>South Indian Dosa Rs.100</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Divya_Shivaraman_/Onion_Tomato_Podi_Masala_Dosa.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Onion Dosa</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.5 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>South Indian Dosa Rs.100</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 foodlist">
                        <Link to="/item" className="card-link">
                        <div className="card cardhover">
                            <img className="card-img-top"
                                src={"https://c1.staticflickr.com/3/2943/33676572342_35a879fd5d_o.jpg"}
                                alt="Card image cap" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h4>Podi Dosa</h4>
                                    </div>
                                    <div className="col">
                                        <p className="rating">4.5 <i className="fa fa-star" style={{fontSize: "10px"}}></i></p>
                                    </div>
                                </div>
                                <div>
                                    <p>South Indian Dosa Rs.100</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
