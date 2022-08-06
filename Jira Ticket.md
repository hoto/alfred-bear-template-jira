# {{ticketId}} {{title}}
#work/jira/{{ticketId}} #work/jira/{date:YYYY}/{date:MM}/{date:dd}
---
[{{ticketId}}]({{JIRA_URL}}/browse/{{ticketId}}) ~ by *{{creator.name}}* [{{type.name}}]

# Description
{{description}}

---
# TODO


# Notes


---
# Comments
{{#each comments}}
```
{{text}}
```
~ by *{{author}}*

{{/each}}