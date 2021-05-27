const {resta, suma} = require('../src/calculadora');

let contador = 1;
let users = ["Vanessa", "Marco", "Luis" , "Ana", "Hector"];
let user = {
    name: "Hector",
    lastname: "Rodriguez", 
    email: 2 
};

describe("Calculos matematicos", () => {
    test("Suma 1 +1 ", () => {
        expect(1+1).toBe(2);
    });

    it("Resta 5-2", () => {
        expect(5-2).toBe(3);
    });

    it("Resta 5-2", () => {
        expect(resta(5,2)).toBe(3);
    });

    //!==
    it("multiplicacion 5*2 !=11", () => {
        expect(5*2).not.toBe(11);
    });

    //TOEQUAL PARA COMPARAR ARREGLOS
    it("Comparando arreglos", () => {
        expect([1,2,3]).toEqual([1,2,3]);
    });

    ///ASI ESTA MAL DEBE SER TOEQUAL
    it("Comparando objetos", () => {
        expect({name:"Luis", lastname: "Torres"}).toBe({name: "Mario", lastname: "Torres"});
    });

    it("comprobando que exita Luis dentro del arreglo de usuarios", () => {
        expect(users).toContain("Luis");
    });

    it("comprobando que exita Luis, Marco dentro del arreglo de usuarios", () => {
        expect(users).toEqual(expect.arrayContaining(["Luis", "Marco"]))
    });

    it("Comprobando que el objeto tenga la propiedad name y lastname", () => {
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("lastname");
    });

    beforeAll(() => {
        console.log("Corriendo la suit de pruebas para los calculos matematicos");
    });

    beforeEach(() => {
        console.log("Prueba no.", contador);
        contador++;
    });

    afterAll(() => {
        console.log("Borrando los registros usados para pruebas");
    })

    afterEach(() => {
        console.log("Cerrando sesión del usuario");
    })
});