export class Customer {
    constructor(
        public readonly id: string,
        public readonly identification: string,
        public readonly name: string,
        public readonly lastname: string,
        public readonly gender: string,
        public readonly birthday: Date,
        public readonly nationality: string,
        public readonly createdAt: Date,
        public readonly status?: boolean
    ) { }

    validateIdentification(): void {
        if (this.identification.length === 10) {
            throw new Error('The identification is required and cannot be empty');
        }
    }

    /* validateName(): void {
        if (this.name.length === 0) {
            throw new Error('The name is required and cannot be empty');
        }
    } */

    /* validateLastname(): void {
        if (this.lastname.length === 0) {
            throw new Error('The lastname is required and cannot be empty');
        }
    } */

    /* validateGender(): void {
        const validGenders = ['Male', 'Female', 'Other'];
        if (!validGenders.includes(this.gender)) {
            throw new Error('The gender must be Male, Female or Other');
        }
    } */

    validateBirthday(): void {
        const currentDate = new Date();
        if (this.birthday > currentDate) {
            throw new Error('The birthday cannot be in the future');
        }
    }
}