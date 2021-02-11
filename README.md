# Coding Challenge REST API

## You'll find:

- Two routers: `/vendors` and `/clients`
- Two models: `vendors-model` and `clients-model`
- Seed data

## Start Server

In your terminal, run `node api/server.js` to start server locally.

## Endpoints

Endpoints can be called locally using Postman, Insomnia etc.

### Vendors

**`GET /api/vendor/`**

Returns all vendors in database.

**`GET /api/vendor/:id`**

Expects an integer id as input, returns vendor matching given id.

**`POST /api/vendor/`**

Create a new vendor; expects this object as input:

```
{
    name: 'Vendor Name',
    direction: 'input' || 'output' || 'both',
    schedule: 'daily' || 'weekly' || 'monthly'
}
```

Returns a success message if creation is successful.

**`PUT /api/vendor/:id`**

Updates a specified vendor; expects an object with any or all of these properties as input: `name`, `direction`, `schedule`.

**`DELETE /api/vendor/:id`**

Expecdts an integer id, returns deleted Vendor id and success message.

**`GET /api/vendor/:id/all-emps`**

Retrieves all unique employees of given vendor's clients.

**`GET /api/vendor/:id/schedules`**

Retrieves delivery schedules for vendor's clients.

### Clients

**`GET /api/client/`**

Returns all clients in database.

**`GET /api/client/:id`**

Expects an integer id, returns client matching given id.

**`POST /api/client/`**

Create a new client; expects this object as input:

```
{
    name: 'Vendor Name',
    emp_count: integer,
}
```

Returns a success message if creation is successful.

**`PUT /api/client/:id`**

Updates a specified client; expects an object with any or all of these properties as input: `name`, `emp_count`.

**`DELETE /api/client/:id`**

Expecdts an integer id, returns deleted Client id and success message.

**`GET /api/client/:id/vendor-data`**

For given client, retrieves all vendor data, separated by vendor direction and schedules.

**`POST /api/client/:id/add-vendor`**

For given client, creates a new vendor relationship.

Expects this object as input:

```
{
    vendor_id: integer,
}
```

Returns success message upon successful creation.

**`DELETE /api/client/:id/remove-vendor`**

For given client, deletes specified vendor relationship.

Expects this object as input:

```
{
    vendor_id: integer,
}
```

Returns success message, Vendor id of deleted relationship, and Relationship id.
