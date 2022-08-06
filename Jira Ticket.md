# {{ticketId}} {{title}}
~ by *{{creator.name}}* [{{type.name}}]
---
#work/jira/{ticketId}} #work/jira/{date:YYYY}/{date:MM}/{date::DD}
---
[{{ticketId}}]({{JIRA_URL}}/browse/{{ticketId}})

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