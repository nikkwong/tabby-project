import PersonEvent from "./PersonEvent";

export default class Person {
  public id: string;
  public name: string;
  public email: string;
  public profileImgUrl: string;
  public description: string;
  public role: string;
  public team: string;
  public slackHandle: string;
  public location: string;
  public tags: string[];
  public events: PersonEvent[];
  constructor(args: Partial<Person> = {}) {
    this.id = args.id || "";
    this.name = args.name || "";
    this.email = args.email || "";
    this.profileImgUrl = args.profileImgUrl || "";
    this.description = args.description || "";
    this.role = args.role || "";
    this.team = args.team || "";
    this.slackHandle = args.slackHandle || "";
    this.location = args.location || "";
    this.tags = args.tags || [];
    this.events = args.events || [];
  }
}
