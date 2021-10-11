import React from 'react'
import { Card, Grid } from 'tabler-react'
import productlogo from '../../assets/logo192.png'

function Product({product}) {
    return (
        <Grid.Col md={3}>
            <Card>
                <img src={productlogo} alt="temp product logo" />
                    <div style={styles.detailsContainer}>
                    <p style={styles.title}>{product.name}</p>
                    <p style={styles.price}>{`P ${formatMoney(parseFloat(product.selling_price))}`}</p>
                </div>
            </Card>
        </Grid.Col>
    )
}

const formatMoney = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const styles = {
    detailsContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "rgb(245, 245, 245)"
    },
    title: {
      float:'left'
    },
    price: {
        fontWeight: 'Bold',
        float:'right'
    }
};


export default Product
