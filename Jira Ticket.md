# {{ticketId}} {{title}}
#work/jira/{{ticketId}} #work/{date:YYYY}/{date:MM}/{date:dd} #work/in-progress
---
[{{ticketId}}]({{JIRA_URL}}/browse/{{ticketId}}) ~ by *{{creator.name}}* [{{type.name}}]

# Description
{{{description}}}

---
# TODO


# Notes


---
# Comments
{{#each comments}}
{{{text}}}
> ~ by *{{author}}*

{{/each}}