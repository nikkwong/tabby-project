import Person from "@/models/Person";
import { useParams } from "next/navigation";
import { useEffect, useReducer } from "react";
import { ProfileContext } from "../contexts/profileContext";
import ProfileReducer from "../reducers/profileReducer";
export default function ProfileProvider({ children }) {
  const { profileId } = useParams() || {};
  const [state, dispatch] = useReducer(ProfileReducer, {
    person: null,
  });

  const apiCalls = {
    getPerson: async (personId: string) => {
      const res = await fetch(`/api/people?personId=${personId}`);
      const p = new Person(await res.json());
      value.setPerson(p);
    },
    updatePerson: async (person: Person) => {
      const p = await fetch(`/api/people?personId=${person.id}`, {
        method: "POST",
        body: JSON.stringify(person),
      });
      // value.setPerson(p);
    },
  };
  const actions = {
    setPerson: (payload: Person) => {
      dispatch({ type: "SET_PERSON", payload });
    },
  };
  useEffect(() => {
    if (profileId) apiCalls.getPerson(profileId as string);
  }, [profileId]);
  const fields = {
    ...state,
  };
  const value = {
    ...fields,
    ...apiCalls,
    ...actions,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
