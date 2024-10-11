import { CustomerEntity } from "../entities/customer.entity";

export interface CustomerEntityRepository {
    findCustomerEntityById(uuid: string): Promise<CustomerEntity | null>;
    registerCustomerEntity(customer: CustomerEntity): Promise<CustomerEntity | null>;
    listCustomerEntity(): Promise<CustomerEntity[] | null>;
}