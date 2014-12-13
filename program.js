// demonstrate object literals - create new object values
var empty_object = {};
// quotes required around "first-name" and "last-name" because they're not valid JavaScript names
var stooge = { 
	"first-name": "Jerome",
	"last-name": "Howard" 
};
// show nested objects
var flight = {
	airline: "Oceanic",
	number: 815, 
	departure: { 
		IATA: "SYD",
		time: "2004-09-22 14: 55",
		city: "Sydney"
		}, 
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10: 42",
		city: "Los Angeles" 
	} 
};
// demonstrate object retrieval
document.writeln(stooge["first-name"]); // should be "Jerome"
document.writeln(flight.departure.IATA); // should be "SYD"
document.writeln(stooge["middle-name"]); // undefined, no middle-name property
document.writeln(flight.status); // undefined, no status property
document.writeln(stooge["FIRST-NAME"]); // undefined, no FIRST-NAME property (wrong case)
document.writeln(stooge["middle-name"] || "(none)"); // should be "none" as middle-name doesn't exist
document.writeln(flight.status || "unknown"); // should be "unknown" as status doesn't exist
document.writeln(flight.equipment); // should be undefined
document.writeln(flight.equipment && flight.equipment.model); // should be undefined, avoids throwing exception
// demonstrate update
stooge['first-name'] = 'Joe'; // replaces Jerome
document.writeln(stooge["first-name"]); // should be "Joe"
stooge['middle-name'] = 'Lester'; // adds middle-name property
document.writeln(stooge["middle-name"]); // should be "Lester"
stooge.nickname = 'Curly'; // adds property, no quotes required
document.writeln(stooge.nickname); // should be "Curly"
flight.equipment = {
	model: 'Boeing 777' // adds this multi-value property
};
flight.status = 'overdue'; // adds this single value property
document.writeln(flight.equipment.model); // should be "Boeing 777"
document.writeln(flight.status); // should be "overdue"
