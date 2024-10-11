import { Customer } from "../entities/customer.entity";

export abstract class CustomerRepository {
    abstract save(customer: Customer): Promise<Customer>;
    abstract findByIdentification(identification: string): Promise<Customer | null>;
    abstract findAll(): Promise<Customer[]>;
    abstract update(customer: Customer): Promise<void>;
}