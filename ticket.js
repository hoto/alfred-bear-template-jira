const rp = require('request-promise');
const J2M = require('j2m');
const secrets = require('./secret.js');

const fetchTicket = async variables => {
    const ticketId = variables.answer;
    const options = {
        uri: `${variables.JIRA_URL}/rest/api/latest/issue/${ticketId}`,
        json: true
    }

    const ticket = await rp(options).auth(variables.JIRA_USER, secrets.API_TOKEN);
    const fields = ticket.fields;

    return {
        ticketId,
        labels: fields.labels,
        creator: {
            name: fields.creator.displayName,
            mail: fields.creator.emailAddress
        },
        subtasks: fields.subtasks,
        type: {
            name: fields.issuetype.name,
            isSubtask: fields.issuetype.subtask
        },
        project: fields.project.name,
        description: J2M.toM(fields.description).trim(),
        title: fields.summary.trim(),
        comments: fields.comment.comments ? fields.comment.comments.map(c => {
            return {
                author: c.author.displayName,
                text: J2M.toM(c.body).trim()
            }
        }) : ''
    }
}

module.exports = fetchTicket;