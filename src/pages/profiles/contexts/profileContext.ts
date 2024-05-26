import Person from "@/models/Person";
import React, { useContext } from "react";

export const ProfileContext = React.createContext<{
  person: Person;
  updatePerson: (person: Person) => void;
}>(null);

export const useProfileContext = () => useContext(ProfileContext);
