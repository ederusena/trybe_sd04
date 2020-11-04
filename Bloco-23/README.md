# BLOCO 23 - Mongo

# db.collection.insertOne()

```js
db.collection.insertOne(
   <document>,
   {
      writeConcern: <document>
   }
)


try {
   db.products.insertOne( { item: "card", qty: 15 } );
} catch (e) {
   print (e);
};


## Insert a Document Specifying an _id Field
## In the following example, the document passed to the insertOne() method includes the _id field. ## The value of _id must be unique within the collection to avoid duplicate key error.

try {
   db.products.insertOne( { _id: 10, item: "box", qty: 20 } );
} catch (e) {
   print (e);
}
```

# db.collection.find()

Name	Description
$eq	Matches values that are equal to a specified value.
$gt	Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in	Matches any of the values specified in an array.
$lt	Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne	Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.
