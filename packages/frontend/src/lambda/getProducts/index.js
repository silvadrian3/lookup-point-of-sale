//run/type `lambda-aws`

'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region:"ap-southeast-1"})

exports.handler = async (event, context) => {
    //const ddb = new AWS.DynamoDB({apiVersion:"2021-10-08"});
    // const params = {
    //     TableName: "products",
    //     Key: {
    //         product_id: {
    //             S: "productname120211005162030"
    //         }
    //     }
    // }

    // ddb.getItem(params, (err, data) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(data);
    // });

    const documentClient = new AWS.DynamoDB.documentClient({region:"ap-southeast-1"});

    const params = {
        TableName: "products",
        Key: {
            product_id: "productname120211005162030"
        }
    }

    try {
        const data = documentClient.get(params).promise();
        console.log(data);
    } catch(err){
        console.log(err);
    }

    


}
