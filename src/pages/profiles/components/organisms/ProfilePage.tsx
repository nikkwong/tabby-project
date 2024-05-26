import Facebook from "@/assets/vectors/facebook";
import Instagram from "@/assets/vectors/instagram";
import Twitter from "@/assets/vectors/twitter";
import Breadcrumbs from "@/components/common/breadcrumbs";
import EditableField from "@/components/form/EditableField";
import Person from "@/models/Person";
import ProfileStat from "@/pages/profiles/components/atoms/profileStat";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useProfileContext } from "../../contexts/profileContext";
import Events from "../molecules/events";
import Tags from "../molecules/tags";

export default function ProfilePage() {
  const { person, updatePerson } = useProfileContext();
  const {
    push,
    query: { editing },
  } = useRouter();
  const editingValue: boolean = editing === "true";
  const pathname = usePathname();
  const toggleEditing = () => {
    push({
      pathname,
      search: editingValue ? "" : "editing=true",
    });
  };
  const getUpdatePerson = useCallback(
    (key: keyof Person) => (value: string) => {
      updatePerson(new Person({ ...person, [key]: value }));
    },
    [person, updatePerson]
  );
  if (!person) return <p>Loading...</p>;
  return (
    <>
      {/* Start bg-skew */}
      <div className="relative">
        <div className="bg-skew w-full h-[10000px] bg-red-500 absolute bottom-[-300px] -z-40"></div>
      </div>
      {/* End bg-skew */}
      <div className="container px-4 mx-auto grid md:grid-cols-[300px_1fr] gap-12">
        <div className="row-span-3">
          <Image
            src={person.profileImgUrl}
            alt={person.name}
            width={400}
            height={600}
            className="rounded object-cover w-full h-[400px] shadow-2xl"
          />
          <div>
            <div className="grid grid-cols-2 mb-4 mt-8 gap-4">
              <ProfileStat
                title="Team"
                editing={editingValue}
                value={person.team}
                onChange={getUpdatePerson("team")}
              />
              <ProfileStat
                title="Slack"
                editing={editingValue}
                value={person.slackHandle}
                onChange={getUpdatePerson("slackHandle")}
              />
              <ProfileStat
                title="Location"
                editing={editingValue}
                value={person.location}
                onChange={getUpdatePerson("location")}
              />
              <ProfileStat
                title="Email"
                editing={editingValue}
                value={person.email}
                onChange={getUpdatePerson("email")}
              />
            </div>
            <p className="font-body">{person.description}</p>
            <div className="flex gap-6 mt-6">
              <Tags tags={person.tags} />
            </div>
          </div>
        </div>
        <div className="flex gap-2 space-between justify-between row-start-1 md:col-start-2">
          <div className="flex flex-col gap-2 hue-1-tertiary">
            <Breadcrumbs />
            <EditableField
              tag={"h1"}
              editing={editingValue}
              className="text-5xl font-display font-bold"
              onChange={getUpdatePerson("name")}
            >
              {person.name}
            </EditableField>
            <h3 className="subtitle">{person.role}</h3>
          </div>
          <div className="flex flex-col flex-0 justify-between">
            <button
              className="btn-secondary font-display"
              onClick={toggleEditing}
            >
              {editing ? "Finish Editing" : "Edit Profile"}
            </button>
            <div className="flex gap-3 justify-end hue-2-primary">
              <Instagram />
              <Twitter />
              <Facebook />
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white shadow-2xl">
          <p className="subtitle mb-4">Activity Log</p>
          <Events events={person.events} />
        </div>
      </div>
    </>
  );
}
