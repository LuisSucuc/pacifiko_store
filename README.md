#  API Integration

- A project was created in Node Js, using Typescript, ES6 and Express as main technologies.
- The project was hosted in the Digital Ocean cloud through the Apps service, which is integrated with GitHub and allows public access to the project at the url https://pacifiko-shpr2.ondigitalocean.app
- A Postman collection was created to test the created endpoints, each request contains a usage example. The collection can be acces here: [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/29726010-3e8b62d6-5a6f-442f-a74c-9757b5a09387?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29726010-3e8b62d6-5a6f-442f-a74c-9757b5a09387%26entityType%3Dcollection%26workspaceId%3D509e8109-a7a5-4d79-92fc-18e96eeeeeab) or [download this file and import on Postman](https://github.com/LuisSucuc/pacifiko_store/blob/feature/api-integration/LuisSucucPacifiko.postman_collection.json)

- Please note that if the services give error 429, it is because the Dummy API does not allow many consecutive requests, please wait 1 minute to try again.

# Endpoints


| Name in postman |Endpoint | Method | Description | Data |
| -- | -- | -- | -- | -- |
| Get Employees | https://pacifiko-shpr2.ondigitalocean.app/api/v1/employee | GET | Get all employee data | N/A |
| Get Employee | https://pacifiko-shpr2.ondigitalocean.app/api/v1/employeee/{id} | GET | Get a single  employee data | `User id` |
| Create Employee | https://pacifiko-shpr2.ondigitalocean.app/api/v1/employee/create | POST | Create new record in database | Employee data: ` { "employee_name": "Luis Sucuc", "employee_salary": 300000, "employee_age": 30, "profile_image": "https://avatars.githubusercontent.com/u/24199028?v=4" } ` |
| Get Salary Employees | https://pacifiko-shpr2.ondigitalocean.app/api/v1/employee/salary/?salary={salary}&type={type} | GET | Filter employees based on salary and filter type | Salary and type (`greather`, `less` or `equal`) |





## Questions

**1. How many employees earn more than $300,000.00?**

You can use the endpoint *"Get salaried employees "* as follows:
` https://pacifiko-shpr2.ondigitalocean.app/api/v1/employee/salary/?salary=300000&type=greater `

You can also change the `type` parameter using the following values: `greather`, `less` or `equal` .


**2. Create a record with your name. You can use fake data for the other attributes.**

You can use the *"Create employee"* endpoint and send the following data.

`https://pacifiko-shpr2.ondigitalocean.app/api/v1/employee/create` 
```json
{ 
     "employee_name": "Luis Sucuc",
     "employee_salary": 400000, 
     "employee_age": 30, 
     "profile_image": "https://avatars.githubusercontent.com/u/24199028?v=4" 
}
```

**3. What’s your user id?**

Using the endpoint from the previous response, it will return the id, which returns a random value.