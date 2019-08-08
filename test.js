
//Crear usuario para el la DB y asignarle contraseña y roles
db.createUser({
    user: 'Isaac',
    pwd: '123',
    roles: ['readWrite', 'dbAdmin']
});

//Insertar un cliente
db.clientes.insert(
{
    firstName: 'Ernesto',
    lastName: 'Suazo'
});

//Insertar varios clientes
db.clientes.insert([
{firstName: 'David', lastName: 'Pavon'},
{firstName: 'Maria', lastName: 'Salinas'},
{firstName: 'Kevin', lastName: 'Urbina'}
]);

//Buscar cliente por nombre como parametro
db.clientes.find({firstName: 'Isaac'})

//Actualizar atributos de un cliente
db.clientes.update(
    {firstName: 'Ernesto'},
    {
        firstName:'Isaac',
        lastName: 'Suazo',
        gender: 'Masculino'
    }
)

//Funcion para una mejor vista en consola
db.clientes.find().pretty

//Buscar por id
db.clientes.find({
    _id: ObjectId("5d4c5859af8a55895639a35c")
})

//Actualizar
db.clientes.update(
    {firstName: 'Kevin'},
    {
        firstName:'Kevin',
        lastName: 'Urbina',
        gender: 'Masculino'
    }
)

//Agregar propiedad al cliente
db.clientes.update(
    {firstName: 'Kevin'},
    {
        $set: {age: 19}
    }
)

//Acualizar solo una propiedad
db.clientes.update(
    {_id: ObjectId("5d4c5859af8a55895639a35c")},
    {$inc: {age: 5}
}
)

//Quitar propiedad
db.clientes.update(
    {_id: ObjectId("5d4c5859af8a55895639a35c")},
    {$unset: {age: 4}
}
)

db.clientes.update(
    {firstName: "David"},
    {$rename:{"firstName":"PrimerNombre"}}
)

//Eliminar Contacto
db.clientes.remove(
    {lastName: "Pavon"}
)

//Buscar varios
db.clientes.find({
    $or:[{firstName:"Isaac"}, {firstName:"Maria"}]
}).pretty()

db.customers.remove({firstName: "Isaac"})
db.customers.remove({firstName: "Isaac"}, {justOne: true})

db.customers.find({firstName: "Elena"});
db.customers.find({$or: [{firstName: "Elena"}, {firstName: "Isaac"}]})
db.customers.fid({gender: "male"})

//Menores
db.customers.find({age: {$lt: 40}})

//Mayores
db.customers.find({age: {$gt: 40}})

//ENtre
db.customers.find({age: {$gt: 30, $lt: 90}});

db.customers.find({"address.city": "Boston"})

db.customers.find({name: {$regex: 'ston'}});

// Ordenamiento por apellido ascendentemente
db.customers.find().sort({lastName: 1});

//Descendentemente
db.customers.find().sort({lastName: -1});

//Contador de datos
db.customers.find().count()

//Cuente los del genero masculino
db.customers.find({gender: "male"}).count()

//Solo me devuelve 4
db.customers.find().limit(4)

//Mostrar 4 datos ordenados
db.customers.find().limit(4).sort({lastName: -1})


//Recorrer todos los datos e imprimir los nombres
db.customers.find().forEach(function(doc) {
  print("Customer Name" + doc.firstName);
});
