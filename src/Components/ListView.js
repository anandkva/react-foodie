import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Fooder extends Component{
    render(){
        return(
            <div className="container">
        <div className="showcase">
            <img src="./asset/images/coverimage.jpg" className="hero-image img-fluid" alt="Responsive image" />
        </div>
        <div className="titlecase">
            <h1>Biriyani</h1>
            <h5>Dindugal Thalapakatti Biriyani</h5>
            <h6>Chennai 10AM - 10PM</h6>
            <Link className="btn btn-danger" to="/"><i className="fa fa-home"></i> Home</Link>
            &nbsp;<button className="btn btn-outline-danger"><i className="fa fa-comments"></i> Add Review</button>
            &nbsp;<button className="btn btn-outline-danger"><i className="fa fa-map-marker"></i> Direction</button>
            &nbsp;<button className="btn btn-outline-danger"><i className="fa fa-bookmark"></i> Add Bookmark</button>
            &nbsp;<button className="btn btn-outline-danger"><i className="fa fa-share"></i> share</button>
        </div>
        <div className="contentcase">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img src="https://st2.depositphotos.com/3147737/5188/i/600/depositphotos_51888195-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg" className="list-image rounded float-left" alt="list image" />
                            </div>
                            <div className="col">
                                <h5>Chiken Biriyani</h5>
                                <p><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star"></i></p>
                                <p>₹ 120</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">Add <i className="fa fa-plus" style={{fontSize: "10px"}}></i></button>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img src="https://static.toiimg.com/thumb/52568357.cms?imgsize=158081&width=800&height=800" className="list-image rounded float-left" alt="list image" />
                            </div>
                            <div className="col">
                                <h5>Mutton Biriyani</h5>
                                <p><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
                                <p>₹ 160</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">Add <i className="fa fa-plus" style={{fontSize: "10px"}}></i></button>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img src="https://www.kannammacooks.com/wp-content/uploads/prawn-biryani-eral-biriyani-recipe-1.jpg" className="list-image rounded float-left" alt="list image" />
                            </div>
                            <div className="col">
                                <h5>Prawn Biriyani</h5>
                                <p><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i></p>
                                <p>₹ 180</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">Add <i className="fa fa-plus" style={{fontSize: "10px"}}></i></button>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img src="https://www.bigbasket.com/media/uploads/recipe/w-l/1025_1.jpg" className="list-image rounded float-left" alt="list image" />
                            </div>
                            <div className="col">
                                <h5>Fish Biriyani</h5>
                                <p><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star"></i></p>
                                <p>₹ 150</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">Add <i className="fa fa-plus" style={{fontSize: "10px"}}></i></button>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img src="https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/5dcbca1717dc0960f009aadb_biryani.jpg" className="list-image rounded float-left" alt="list image" />
                            </div>
                            <div className="col">
                                <h5>Calcutta Biryani</h5>
                                <p><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star" style={{color: "gold"}}></i><i className="fa fa-star"></i></p>
                                <p>₹ 160</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">Add <i className="fa fa-plus" style={{fontSize: "10px"}}></i></button>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
        )
    }
}