https://www.typescriptlang.org/


GET /patients -> devolver la colección de pacientes
GET /patients/1 -> devolver el paciente 1
DELETE /patients -> borraría todos los pacientes
					(no se suele implementar)
DELETE /patients/1 - > borraría el paciente 1

POST - PUT - PATCH

Operaciones idempotentes: GET, PUT, DELETE
PUT /patients/1 (le paso todos los datos) -> modificar el paciente 1

// Crear un elementos
POST /patients -> {"nombre":"pepito"}
					{"id": 1, "nombre":"pepito"}
POST /patients -> {"nombre":"pepito"}
					{"id": 2, "nombre":"pepito"}

// pŕactica habitual del patch: modificar sólo un atributo
{
	id: 1,
	nombre: "pepito"
	correo: "pepito@jdskjf.com"
}
PATCH /patients/1 {correo:"pepe@hotmail.com"}
{
	id: 1,
	nombre: "pepito"
	correo: "pepe@hotmail.com"
}

// seǵún el RFC -> modificar un elemento según su estado en el servidor

{
	id: 1,
	nombre: "pepito"
	correo: "pepito@jdskjf.com",
	edad: 50
}

PATCH /patients/1 
{
	add: {edad, 1}
}



Sync validators: Synchronous functions that take a control instance and immediately return either a set of validation errors or null. Pass these in as the second argument when you instantiate a FormControl.

Async validators: Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Pass these in as the third argument when you instantiate a FormControl.
