# Coding Challenge REST API

## You'll find:

- Two routers: `/vendors` and `/clients`
- Two models: `vendors-model` and `clients-model`
- Seed data

## Endpoints

Endpoints can be called locally using Postman, Insomnia etc.

### Vendors

**`GET /api/vendors/`**

Returns all vendors in database.

**`GET /api/vendors/:id`**

Expects an integer id as input, returns vendor matching given id.

**`POST /api/vendors/`**

Create a new vendor; expects this object as input:

```
{
    name: 'Vendor Name',
    direction: 'input' || 'output' || 'both',
    schedule: 'daily' || 'weekly' || 'monthly'
}
```

Returns a success message if creation is successful.

**`PUT /api/vendors/:id`**

Updates a specified vendor; expects an object with any or all of these properties as input: `name`, `direction`, `schedule`.

**`DELETE /api/vendors/:id`**

Expecdts an integer id, returns deleted Vendor id and success message.

**`GET /api/vendors/:id/all-emps`**

Retrieves all unique employees of given vendor's clients.

**`GET /api/vendors/:id/schedules`**

Retrieves delivery schedules for vendor's clients.

### Clients

**`GET /api/clients/`**

Returns all clients in database.

**`GET /api/clients/:id`**

Expects an integer id, returns client matching given id.

**`POST /api/clients/`**

Create a new client; expects this object as input:

```
{
    name: 'Vendor Name',
    emp_count: integer,
}
```

Returns a success message if creation is successful.

**`PUT /api/clients/:id`**

Updates a specified client; expects an object with any or all of these properties as input: `name`, `emp_count`.

**`DELETE /api/clients/:id`**

Expecdts an integer id, returns deleted Client id and success message.

**`GET /api/clients/:id/vendor-data`**

For given client, retrieves all vendor data, separated by vendor direction and schedules.

**`POST /api/clients/:id/add-vendor`**

For given client, creates a new vendor relationship.

Expects this object as input:

```
{
    vendor_id: integer,
}
```

Returns success message upon successful creation.

**`DELETE /api/clients/:id/remove-vendor`**

For given client, deletes specified vendor relationship.

Expects this object as input:

```
{
    vendor_id: integer,
}
```

Returns success message, Vendor id of deleted relationship, and Relationship id.
