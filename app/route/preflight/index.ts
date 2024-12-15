import { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (_event: APIGatewayProxyEvent) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        },
        body: '',
    };
    return response;
};
