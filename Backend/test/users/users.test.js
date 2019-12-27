const db = require("../../api/connection");


test("get codice fisicale by first name and last name", () => {

    const name = "Ramazan";
    const lastName = "Aliskhanov";

    db
        .select('codice_fisicale')
        .from('users')
        .where({ nome: name })
        .andWhere({ congnome: lastName })
        .then(function(data) {
            expect(data.codice_fisicale).toBe('12345678');
        });

});

test("delete user by id", () => {

    const id = 6;

    db
        .delete()
        .from('users')
        .where({ id: id })
        .then(function(data) {
            
        });

});