export default class PersonEvent {
  public id: string;
  public title: string;
  public description: string;
  public tags: string[];
  public date: string;
  constructor(args: Partial<PersonEvent> = {}) {
    this.id = args.id || "";
    this.title = args.title || "";
    this.description = args.description || "";
    this.tags = args.tags || [];
    this.date = args.date || "";
  }
}
