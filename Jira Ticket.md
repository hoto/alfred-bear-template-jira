# {{ticketId}} {{title}}
---
#work/jira/{ticketId}} #work/jira/{date:YYYY}/{date:MM}/{date::DD}
---
[{{ticketId}}]({{JIRA_URL}}/browse/{{ticketId}}) ~ by *{{creator.name}}* [{{type.name}}]

## Description
{{description}}

---
## TODO


## Notes


---
## Comments
{{#each comments}}
```md
{{text}}
```
~ by *{{author}}*

{{/each}}