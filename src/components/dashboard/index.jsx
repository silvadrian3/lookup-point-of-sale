import React, { Component } from "react";
import axios from "axios";
import { AppEndpoints } from "../../constants/AppEnpoints";
// import { Tab, TabbedCard, Grid, Card } from "tabler-react";
// import "tabler-react/dist/Tabler.css";
import "./Home.css"
import ProductList from "../products/ProductList";

class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false,
            user: {
                firstname: '',
                lastname: ''
            },
            categories: []
        }
    }

    render(){
        
        const defaultCategory = {
            category_id:0,
            category: 'All'
        }

        const categoryList = [defaultCategory, ...this.state.categories];

        console.log(categoryList);

        return this.state.isLoggedIn  && (
            <div className="home-container">
            <div className="welcome-text">{`Welcome, ${this.state.user.firstname}!`}</div>
            
            {/* <Grid.Row cards deck>
                <Grid.Col md={9}>
                
                    <TabbedCard initialTab="All">
                        { 
                            categoryList.map((c, index) => 
                                <Tab key={index} index={index} title={c.category}>
                                    <ProductList category={c.category_id} />
                                </Tab>
                            )
                        }
                    </TabbedCard>
                
                </Grid.Col>
                <Grid.Col md={3}>
                <Card
                    title="Card title"
                    body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                        deleniti fugit incidunt, iste, itaque minima neque pariatur
                        perferendis sed suscipit velit vitae voluptatem. A consequuntur,
                        deserunt eaque error nulla temporibus!`}
                    />
                </Grid.Col>
            </Grid.Row> */}
            </div>
        )
    }

    componentDidMount(){
        this.getUserProfile();
        this.getProductCategories();
    }

    getUserProfile = async() => {
        const res = await axios.get(`http://localhost/lookup/lookup-api/public/api/v1/${AppEndpoints.USERS}/3`)
        const result = res.data;

        if(result.result)
            this.setState({
                isLoggedIn: true,
                user: {
                    firstname: result.data.first_name,
                    lastname: result.data.last_name
                }
            }, () => {
                console.log("Profile:", result.data);
            });
    }

    getProductCategories = async() => {
        console.group("getProductCategories()");
        const res = await axios.get(`http://localhost/lookup/lookup-api/public/api/v1/${AppEndpoints.PRODUCT_CATEGORIES}/3`)
        const result = res.data;

        if(result.result)
            this.setState({
                categories: result.data
            }, () => {
                console.log("Categories:", result.data);
            });
            

        console.groupEnd();
    }
}






export default Dashboard