const { beregnReisefradrag } = require("./logic/reisefradragLogic")

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.requestContext.http.method) {
            case 'GET' : 
                body = "Hello world"
                break;
            case 'POST':
                body = beregnReisefradrag(JSON.parse(event.body))
                break;
            default:
                throw new Error(`Unsupported method "${event.requestContext.http.method}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};