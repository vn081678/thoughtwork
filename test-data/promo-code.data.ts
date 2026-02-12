export interface ValidPromoCode {
    code: string;
    discount: string;
    description: string;
}

export interface InvalidPromoCode {
    code: string;
    description: string;
}

export const validCodes: ValidPromoCode[] = [
    { code: 'AF3-FJK-418', discount: '30%', description: '30% discount - check digit 8 (3+4+1=8)' },
    { code: 'JJ5-OPQ-320', discount: '50%', description: '50% discount - check digit 0 (5+3+2=10 mod 10=0)' },
    { code: 'XX2-YZA-640', discount: '20%', description: '20% discount - check digit 0 (2+6+4+0... sum mod 10)' },
];

export const invalidCodes: InvalidPromoCode[] = [
    { code: 'AF3-FJK-419', description: 'Wrong check digit (expected 8, got 9)' },
    { code: 'INVALID-CODE', description: 'Completely invalid format' },
    { code: '123-456-789', description: 'All digits, wrong format (XX9-XXX-999)' },
    { code: 'AB1-CDE-00X', description: 'Letter in digit position' },
];

export const emptyCode: InvalidPromoCode = {
    code: '',
    description: 'Empty promotional code',
};

export const expectedMessages = {
    validPromo: (code: string, discount: string) =>
        `Promotional code ${code} used: ${discount} discount!`,
    invalidPromo: (code: string) =>
        `Sorry, code ${code} is not valid`,
};
