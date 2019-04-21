## Modules

<dl>
<dt><a href="#module_lib">lib</a></dt>
<dd></dd>
<dt><a href="#module_resources">resources</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
</dl>

<a name="module_lib"></a>

## lib

* [lib](#module_lib)
    * [.Controller](#module_lib.Controller)
        * [new Controller(dao)](#new_module_lib.Controller_new)
        * [.create(req, res, next)](#module_lib.Controller+create) ⇒ <code>Object</code>
        * [.count(req, res, next)](#module_lib.Controller+count) ⇒ <code>number</code>
        * [.find(req, res, next)](#module_lib.Controller+find) ⇒ <code>Object</code>
        * [.findOne(req, res, next)](#module_lib.Controller+findOne) ⇒ <code>Object</code>
        * [.findById(req, res, next)](#module_lib.Controller+findById) ⇒ <code>Object</code>
        * [.update(req, res, next)](#module_lib.Controller+update)
        * [.remove(req, res, next)](#module_lib.Controller+remove)
    * [.Dal](#module_lib.Dal)
        * [new Dal(Schema)](#new_module_lib.Dal_new)
        * [.create(body)](#module_lib.Dal+create) ⇒ <code>Object</code>
        * [.count(query)](#module_lib.Dal+count) ⇒ <code>Number</code>
        * [.find(query)](#module_lib.Dal+find) ⇒ <code>Array</code>
        * [.findOne(query)](#module_lib.Dal+findOne) ⇒ <code>Object</code>
        * [.findById(id)](#module_lib.Dal+findById) ⇒ <code>Object</code>
        * [.update(query, body)](#module_lib.Dal+update) ⇒ <code>Object</code>
        * [.remove(query)](#module_lib.Dal+remove)
    * [.Factory(config, middlewares)](#module_lib.Factory)
    * [.sanitizeQuery(req, res, next)](#module_lib.sanitizeQuery)
    * [.createRoute(controller, middlewares)](#module_lib.createRoute)
    * [.config](#module_lib.config) : <code>Object</code>

<a name="module_lib.Controller"></a>

### lib.Controller
Controller represents default actions used by
routes to manipulate information

**Kind**: static class of [<code>lib</code>](#module_lib)  

* [.Controller](#module_lib.Controller)
    * [new Controller(dao)](#new_module_lib.Controller_new)
    * [.create(req, res, next)](#module_lib.Controller+create) ⇒ <code>Object</code>
    * [.count(req, res, next)](#module_lib.Controller+count) ⇒ <code>number</code>
    * [.find(req, res, next)](#module_lib.Controller+find) ⇒ <code>Object</code>
    * [.findOne(req, res, next)](#module_lib.Controller+findOne) ⇒ <code>Object</code>
    * [.findById(req, res, next)](#module_lib.Controller+findById) ⇒ <code>Object</code>
    * [.update(req, res, next)](#module_lib.Controller+update)
    * [.remove(req, res, next)](#module_lib.Controller+remove)

<a name="new_module_lib.Controller_new"></a>

#### new Controller(dao)

| Param | Type | Description |
| --- | --- | --- |
| dao | <code>Dal</code> | instance of a class dao for access to stored data |

<a name="module_lib.Controller+create"></a>

#### controller.create(req, res, next) ⇒ <code>Object</code>
create is the method that creates a resource using the dao class for persistence

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  
**Returns**: <code>Object</code> - - use response to returns resource created  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Controller+count"></a>

#### controller.count(req, res, next) ⇒ <code>number</code>
count is a method that returns the amount of records in
the database filtered by the query entered through the req

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  
**Returns**: <code>number</code> - use response to returns total count of collection  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Controller+find"></a>

#### controller.find(req, res, next) ⇒ <code>Object</code>
find is a method that uses the dao class to fetch a list of data filtered
by the query entered in the request

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  
**Returns**: <code>Object</code> - - use response to returns object
containing the total of items and a list of items  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

**Example**  
```js
// return
{total: 100, items: [{id:1},{id:3},{id:3}]}
```
<a name="module_lib.Controller+findOne"></a>

#### controller.findOne(req, res, next) ⇒ <code>Object</code>
findOne is a method that uses the dao class to fetch data filtered
by the query entered in the request and return the first item found

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  
**Returns**: <code>Object</code> - - use response to returns object found  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Controller+findById"></a>

#### controller.findById(req, res, next) ⇒ <code>Object</code>
findById is a method that uses the dao class to fetch a
record in the database filtered by the informed id

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  
**Returns**: <code>Object</code> - - use response to returns object found  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Controller+update"></a>

#### controller.update(req, res, next)
update is a method that uses the dao class to update
information from a record in the database

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Controller+remove"></a>

#### controller.remove(req, res, next)
remove is a method that uses the dao class to delete a record
in the database filtered by the id entered in the req.params

**Kind**: instance method of [<code>Controller</code>](#module_lib.Controller)  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.Dal"></a>

### lib.Dal
Dal is representing actions in database

**Kind**: static class of [<code>lib</code>](#module_lib)  

* [.Dal](#module_lib.Dal)
    * [new Dal(Schema)](#new_module_lib.Dal_new)
    * [.create(body)](#module_lib.Dal+create) ⇒ <code>Object</code>
    * [.count(query)](#module_lib.Dal+count) ⇒ <code>Number</code>
    * [.find(query)](#module_lib.Dal+find) ⇒ <code>Array</code>
    * [.findOne(query)](#module_lib.Dal+findOne) ⇒ <code>Object</code>
    * [.findById(id)](#module_lib.Dal+findById) ⇒ <code>Object</code>
    * [.update(query, body)](#module_lib.Dal+update) ⇒ <code>Object</code>
    * [.remove(query)](#module_lib.Dal+remove)

<a name="new_module_lib.Dal_new"></a>

#### new Dal(Schema)

| Param | Type | Description |
| --- | --- | --- |
| Schema | <code>mongoose.Model</code> | is a mongoose model used to make the calls to the database |

<a name="module_lib.Dal+create"></a>

#### dal.create(body) ⇒ <code>Object</code>
create save the data entered in the database

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Object</code> - - is the recording of stored data  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> | is the data to be inserted into the database using the schema |

<a name="module_lib.Dal+count"></a>

#### dal.count(query) ⇒ <code>Number</code>
count is a method that returns the amount of records in
the database filtered by the query entered through the query

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Number</code> - - a number of count result  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | is an object with the information to be used to filter the data |

<a name="module_lib.Dal+find"></a>

#### dal.find(query) ⇒ <code>Array</code>
find is a method that uses the schema to fetch a list of data filtered
by the query entered in the query

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Array</code> - an array of found items that meet the query's requirements  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | is an object with the information to be used to filter the data |

<a name="module_lib.Dal+findOne"></a>

#### dal.findOne(query) ⇒ <code>Object</code>
findOne is a method that uses the schema to fetch the first
item that satisfies the query requirements

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Object</code> - - the first item found that meets
the query requirements  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | is an object with the information to be used to filter the data |

<a name="module_lib.Dal+findById"></a>

#### dal.findById(id) ⇒ <code>Object</code>
findById is a method that uses the schema to fetch
the item that has the id entered in the query

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Object</code> - - the found item that meets the id  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | is the identifier of the resource you want to find |

<a name="module_lib.Dal+update"></a>

#### dal.update(query, body) ⇒ <code>Object</code>
update is a method that updates the information in the
 registry in the database

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  
**Returns**: <code>Object</code> - - contains found items(n), updated items(nModified), and ok if all normal occurred  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | is an object with the information to be used to filter the data |
| body | <code>Object</code> | - are the data to be updated in the database using the schema |

<a name="module_lib.Dal+remove"></a>

#### dal.remove(query)
remove is a method that excludes a record
in the database that matches the query filters

**Kind**: instance method of [<code>Dal</code>](#module_lib.Dal)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | is an object with the information to be used to filter the data |

<a name="module_lib.Factory"></a>

### lib.Factory(config, middlewares)
Factory is an integrated route generating function with controller
and its dao, each route generated is ready for use bantando to be
attached in destination path

**Kind**: static method of [<code>lib</code>](#module_lib)  

| Param | Type |
| --- | --- |
| config | <code>config</code> | 
| middlewares | <code>Object</code> | 

<a name="module_lib.sanitizeQuery"></a>

### lib.sanitizeQuery(req, res, next)
sanitizeQuery is a middleware function that parses items contained
in the req.query to object

**Kind**: static method of [<code>lib</code>](#module_lib)  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | is a request object |
| res | <code>Object</code> | is response object |
| next | <code>function</code> | is the function that calls the next middleware |

<a name="module_lib.createRoute"></a>

### lib.createRoute(controller, middlewares)
createRoute is a function that receives a controller and an object
containing middlewares referring to the route methods

**Kind**: static method of [<code>lib</code>](#module_lib)  

| Param | Type |
| --- | --- |
| controller | <code>InstanceType.&lt;Controller&gt;</code> | 
| middlewares | <code>Object</code> | 

**Example**  
```js
// middlewares
const middleware = {
  find: [(req, res, next) => {
     console.log('my middleware')
     next()
  }],
  post: [],
  get: [],
  put: [],
  delete: []
}
```
<a name="module_lib.config"></a>

### lib.config : <code>Object</code>
**Kind**: static typedef of [<code>lib</code>](#module_lib)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| schema | <code>mongoose.Model</code> | is a instance of mongoose model |
| [customController] | <code>controller</code> | is an instance of the controller |
| [customDao] | <code>dao</code> | is an instance of the dao |

<a name="module_resources"></a>

## resources
<a name="exp_module_resources--module.exports"></a>

### module.exports ⏏
This module export generated resources to routes

**Kind**: Exported member  
<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * [.module.exports(error)](#module_utils.module.exports) ⇒ <code>Object</code>
    * [.module.exports(str)](#module_utils.module.exports) ⇒ <code>produce</code>
    * [.produce](#module_utils.produce) : <code>Object</code>

<a name="module_utils.module.exports"></a>

### utils.module.exports(error) ⇒ <code>Object</code>
This function defaults to return errors

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | is a object or array of errors |

**Example**  
```js
return {
  errors: {
     params: ['name'],
        messages: [`name is necessary to register`]
    }
 }
```
<a name="module_utils.module.exports"></a>

### utils.module.exports(str) ⇒ <code>produce</code>
Check if it is possible to convert a string to an object,
if it is possible convert and retake object as result and
false error if it does not return error true and result null

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string in json format to be converted to object |

<a name="module_utils.produce"></a>

### utils.produce : <code>Object</code>
**Kind**: static typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>Boolean</code> | is true if it is not possible to convert the string object and false if it is conveyed |
| result | <code>Object</code> | is a parser of string to object |

