import Person from "@/models/Person";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "people.json");

const _getPeople = (personId: string) => {
  const peopleStr = fs.readFileSync(filePath);
  const people = JSON.parse(peopleStr) as [];
  const personIdx = people.findIndex(
    (person: Person) => person.id === personId
  );
  return { people, person: people[personIdx], personIdx };
};

const handlePost = (req, res) => {
  const body = JSON.parse(req.body);
  const { people, personIdx } = _getPeople(body.id);
  const updatedPeople = [
    ...people.slice(0, personIdx),
    body,
    ...people.slice(personIdx + 1),
  ];

  fs.writeFile(filePath, JSON.stringify(updatedPeople), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error writing file", error: err.message });
    }

    res.status(200).json(body);
  });
};

const handleGet = (req, res) => {
  if (!req.query.personId) {
    return res.status(400).json({ message: "personId is required" });
  }
  const { person } = _getPeople(req.query.personId);
  return res.status(200).json(person);
};

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return handlePost(req, res);
    case "GET":
      return handleGet(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
