# Work Api

A "work" api provides endpoints for record of proposals and records for proposals, are included and finalized for a record of their records.

## Documentation

### Endpoints

#### final
<dl>
<dt><a href="#get_final">GET - /api/final</a></dt>
<dt><a href="#post_final">POST - /api/final</a></dt>
<dt><a href="#get_final_id">GET - /api/final/:id</a></dt>
<dt><a href="#put_final_id">PUT - /api/final/:id</a></dt>
<dt><a href="#delete_final_id">DELETE - /api/final/:id</a></dt>
</dl>

#### partial
<dl>
<dt><a href="#get_partial">GET - /api/partial</a></dt>
<dt><a href="#post_partial">GET - /api/partial</a></dt>
<dt><a href="#get_partial_id">GET - /api/partial/:id</a></dt>
<dt><a href="#put_partial_id">GET - /api/partial/:id</a></dt>
<dt><a href="#delete_partial_id">GET - /api/partial/:id</a></dt>
</dl>

#

<a name="get_final"></a>

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

#

<a name="post_final"></a>

> POST - /api/final

#

<a name="get_final_id"></a>

> GET - /api/final/:id

#

<a name="put_final_id"></a>

> PUT - /api/final/:id

#

<a name="delete_final_id"></a>

> DELETE - /api/final/:id

#

<a name="get_partial"></a>

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

#

<a name="post_partial"></a>

> POST - /api/partial

#

<a name="get_partial_id"></a>

> GET - /api/partial/:id

#

<a name="put_partial_id"></a>

> PUT - /api/partial/:id

#

<a name="delete_partial_id"></a>

> DELETE - /api/partial/:id

#

documentation of code api is in the directory ./docs in format html and [here Markdown](https://github.com/sandroramone/work/blob/master/DOCUMENTATION.md).
