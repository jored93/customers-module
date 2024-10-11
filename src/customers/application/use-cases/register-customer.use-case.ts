import { v4 as uuidv4 } from 'uuid';
import { Customer } from '../../domain/entities/customer.entity';
import { CustomerRepository } from '../../domain/repositories/customer.repository';

export class RegisterCustomerUseCase {
    constructor(
        private readonly customerRepository: CustomerRepository,
    ) {}

    async execute(identification: string, name: string, lastname: string, gender: string, birthday: Date, nationality: string): Promise<Customer> {
        const customer = new Customer(
            uuidv4(),
            identification,
            name,
            lastname,
            gender,
            birthday,
            nationality,
            new Date()
        );

        customer.validateIdentification();
        customer.validateBirthday();

        return this.customerRepository.save(customer);
    }
}
