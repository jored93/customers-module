import { v4 as uuidv4 } from 'uuid';
import { CustomerEntity } from "./customer.entity";

export class CustomerValue implements CustomerEntity {
  uuid: string;
  name: string;
  email: string;
  description: string;

  constructor({ name, email, description }: { name: string; email: string, description?:string }) {
    this.uuid = uuidv4();
    this.name = name;
    this.email = email;
    this.description = description  ?? "default";
  }
}