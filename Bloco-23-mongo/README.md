# BLOCO 23 - Mongo

# db.collection.insertOne()
db.products.insertOne( { item: "card", qty: 15 } );
db.products.insertOne( { _id: 10, item: "box", qty: 20 } );


# db.collection.find()

##  Select ALL
db.inventory.find( {} )
SELECT * FROM inventory

## Specify Equality Condition
db.inventory.find( { status: "D" } )
SELECT * FROM inventory WHERE status = "D"

## Specify Conditions Using Query Operators
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
SELECT * FROM inventory WHERE status in ("A", "D")

## Specify AND Conditions
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
SELECT * FROM inventory WHERE status = "A" AND qty < 30

## Specify OR Conditions
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
SELECT * FROM inventory WHERE status = "A" OR qty < 30

## Specify AND as well as OR Conditions
db.inventory.find( {
     status: "A",
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )

SELECT * FROM inventory 
WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")

## Greater Than
db.inventory.find( { dim_cm: { $gt: 25 } } )

## Greater Than and Lower than
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )

## Query for an Array Element that Meets Multiple Criteria¶
db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )

## Query for an Element by the Array Index Position¶
db.inventory.find( { "dim_cm.1": { $gt: 25 } } )



Name	Description
$eq	Matches values that are equal to a specified value.
$gt	Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in	Matches any of the values specified in an array.
$lt	Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne	Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.
