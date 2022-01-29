const cpf_after = require ('./cpf_after');

test("Should validate CPF A", () => {
    const isValid = cpf_after.validate('604.777.463-62');
    expect(isValid).toBeTruthy();
});

test("Should validate CPF B", () => {
    const isValid = cpf_after.validate('935.411.347-90');
    expect(isValid).toBeTruthy();
});

test("Should validate CPF C", () => {
    const isValid = cpf_after.validate('987.654.321-00');
    expect(isValid).toBeTruthy();
});

test("Shouldn't validate CPF A", () => {
    const isValid = cpf_after.validate('935.411.347-90');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF B", () => {
    const isValid = cpf_after.validate('123.456.789-99');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF C", () => {
    const isValid = cpf_after.validate('111.111.111-11');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF D", () => {
    const isValid = cpf_after.validate('111.111.111-111111');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF E", () => {
    const isValid = cpf_after.validate('111111111');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF F", () => {
    const isValid = cpf_after.validate(null);
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF G", () => {
    const isValid = cpf_after.validate(undefined);
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF H", () => {
    const isValid = cpf_after.validate('');
    expect(isValid).toBeFalsy();
});

