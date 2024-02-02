import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
let name = chance.name({ gender: "female", nationality: "en" });
let age = chance.age({ type: "adult" });
let profession = chance.profession({ rank: true });

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
