<h1 align="center">API For Stock Control</h1>

RESTful API that allows registering, editing, and deleting available products and inventory, via HTTP requests. The data is saved in a MongoDB database

# Tutorial
## Use

### Install dependencies
  ```
  npm install
   
   ```
### Start
  ```
  npm start
   
   ```

### Routes   
`GET` http://localhost:8080/estoque Return all products registered in the stock

`GET` https://localhost:8080/produtos/:id Return a specific product by its ID

`POST` https://localhost:8080/register Register a new product

`PATCH` https://localhost:8080/editar/:id Update a product

`DELETE` https://localhost:8080/editar/:id Delete a specific product from the inventory





   
### Registering a product
Post Body
  ```json
 {
    "nome": "Headset Logitech G435",
    "preco": 439,
    "quantidade": 85,
}
   
   ```
   
