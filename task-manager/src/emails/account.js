const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'email@email.com',
        subject: 'Thanks for joining in!',
        text: `welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}