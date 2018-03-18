export class Device {
  _id: string;
  limit: number;
  spent: number;
  constructor(_id: string, limit: number) {
    this._id = _id;
    this.limit = limit;
    this.spent = 0;
  }
}
