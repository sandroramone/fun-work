# Work Api

A "work" api provides endpoints for record of proposals and records for proposals, are included and finalized for a record of their records.

## Documentation

> GET - /api/final

used to list all proposals

additional parameters:

    - limit: type = number
    - skip: type = number

default values:

> ?limit=10&skip=0

status code ok: 200

result request example:

```json
{
    "total": 100,
    "items": []
}

```

> POST - /api/final

> GET - /api/final/:id

> PUT - /api/final/:id

> DELETE - /api/final/:id

> GET - /api/partial

used to list all partial of proposals

additional parameters:

    - limit: type = number
    - skip: type = number

default values:

> ?limit=10&skip=0

status code ok: 200

result request example:

```json
{
    "total": 100,
    "items": []
}

```

> POST - /api/partial

> GET - /api/partial/:id

> PUT - /api/partial/:id

> DELETE - /api/partial/:id

documentation of code api is in the directory ./docs in format html and [here Markdown](https://github.com/sandroramone/work/blob/master/DOCUMENTATION.md).
