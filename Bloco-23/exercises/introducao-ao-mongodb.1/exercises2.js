// Exercício 1: Inspecione um documento para que você se familiarize com eles.
// Entenda os campos e os níveis existentes no documento escolhido.
// git add .; git commit -m "exercicio 1". git push -u origin exercises/introducao-ao-mongodb.1
db.superheroes.find({}).limit(1).pretty();
db.superheroes.findOne();

{
	"_id" : ObjectId("5fa5b476dcfc9973be0a4134"),
	"name" : "Abomination",
	"alignment" : "bad",
	"gender" : "Male",
	"race" : "Human / Radiation",
	"aspects" : {
		"eyeColor" : "green",
		"hairColor" : "No Hair",
		"height" : 203,
		"weight" : 200
	},
	"publisher" : "Marvel Comics"
}

// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
db.superheroes.find({ "aspects.height": { $lt: 180}});

// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.find({ "aspects.height": { $lt: 180}}).count();

// Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.find({ "aspects.height": { $lte: 180}}).count();

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.find({ "aspects.height": { $gte: 200}});

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.find({ "aspects.height": { $gte: 200}}).count();

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({ "aspects.height": { $gte: 200}}).count();

// Exercício 8: Retorne o total de super-heróis com olhos azuis.
db.superheroes.find({ "aspects.eyeColor": "blue" }).count();

// Exercício 9: Utilizando o operador $in, 
// selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").
db.superheroes.find({ $or: [ {"aspects.hairColor": "Black"}, {"aspects.hairColor": "No Hair"}]});
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } }).pretty();

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
db.superheroes.find({ $or: [ {"aspects.hairColor": "Black"}, {"aspects.hairColor": "No Hair"}]}).count();
db.superheroes.count({ "aspects.hairColor": { $in: ["black", "No Hair"] } });

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.find({ $nor: [ {"aspects.hairColor": "Black"}, {"aspects.hairColor": "No Hair"}]});
db.superheroes.count({ "aspects.hairColor": { $nin: ["black", "No Hair"] } });

// Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.find({ "aspects.height": { $not: { $gt: 180} } });
db.superheroes.count({ "aspects.height": { $not: { $gt: 180 } } });

// Exercício 13: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m.
db.superheroes.find({ $and: [{ "race": { $not: /Human/}}, {"aspects.height": {$lt: 180}}]});
db.superheroes.find({ nor: [ { "race": "Human" },{ "aspects.height": { $gt: 180 } }]}).pretty();

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
db.superheroes.find( { $and: [{ "aspects.height": { $in: [180, 200] }}, { "publisher" : "Marvel Comics"}]}).count();
db.superheroes.find( { $and: [{ $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]}, {publisher: "Marvel Comics"}]}).count();

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg
// sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
db.superheroes.find(
    {
        $and: [
            {
                "aspects.weight": { $gte: 80, $lte: 100 }
            },
            {
                $or: [{ race: "Human" }, { race: "Mutant" }]
            },
            {
                publisher: { $ne: "DC Comics" }
            }
        ]
    }
).pretty();

// Exercício 16: Retorne o total de documentos que não contêm o campo race.
db.superheroes.count(
    { race: { $exists: false } }
);

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor.
db.superheroes.count(
    { "aspects.hairColor": { $exists: true } }
);

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures.
db.superheroes.deleteOne(
    { publisher: "Sony Pictures" }
);

// Exercício 19: Remova todos os documentos publicados pelo George Lucas.
db.superheroes.deleteMany(
    { publisher: "George Lucas" }
);