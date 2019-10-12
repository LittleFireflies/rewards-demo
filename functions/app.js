const request = require('request').defaults({
    encoding: null
});

let url = "https://api.telegram.org/bot932870986:AAG1xZGSvIPoQlI6oXK__ciOLdzEfA8AMdc/sendMessage?chat_id=188132947&text=$message";
/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.send = (pubSubEvent, context) => {
    console.log(Buffer.from(pubSubEvent.data, 'base64').toString());
    let message = JSON.parse(Buffer.from(pubSubEvent.data, 'base64').toString());
    var steps = message.steps;
    console.log(steps)
    steps.forEach((step) => {
        var stepName = step.name
        step.args.forEach((arg) => {
            stepName += ` ${arg}`
        })

        if (step.status) {
            sendMessage(`${stepName} ${step.status}`)
        }
    })
};

function sendMessage(message) {
    let newUrl = url.replace("$message", message)
    request.get(newUrl, (error, response, body) => {
        let json = JSON.parse(body);
        console.log(json);
    });
}