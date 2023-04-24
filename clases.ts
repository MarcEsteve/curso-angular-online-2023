// Clases en TypeScript

class Jugador {
    //PROPIEDADES

    //Atributos
  public nombre: string; // public no es obligatorio porque es el modificador por defecto
  apellidos: string; // es public también
  private goles: number;

    //Contructor
  constructor(nombre: string, apellidos: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
  }
    //Método setter
  setGoles(goles: number): void {
    this.goles = goles;
  }
    //Método getter
  getGoles(): number {
    return this.goles;
  }
}

let jugador1 = new Jugador("Lionel", "Messi");
jugador1.setGoles(13); // Asignamos un 5 al atributo goles con este método setter
let jugador11 = new Jugador("Carles", "Pujol");
jugador11.setGoles(5); 
console.log(jugador1.getGoles()); // 13
console.log(jugador11.getGoles()); // 5


// Clases con constructor breve (si declaramos los parámetros del constructor con
// modificador de acceso se crean las propiedades con el mismo nombre)

class Player {
  constructor(
    public name: string,
    public surname: string,
    private goals: number
  ) {}

  // setter y getters...
}

let jugador2 = new Player("Lionel", "Messi", 0);

// Interfaces (como tipado estructural)

interface EstadoBoton {
  hidden: boolean;
  disabled: boolean;
  waiting: boolean;
  backgroundColor?: string; // Se pueden declarar como opcionales
}

let estadoBotonEnvio: EstadoBoton = {
  hidden: false,
  disabled: true,
  waiting: false,
  //backgroundColor: 'green' Al ser opcional si no se incluye no arroja error
};

// Interfaces como implementaciones obligatorias para clases

interface DatosMaestros {
  razonSocial: string;
  cif: string;

  getCif(): string;
  setCif(cif: string): void;
}

class Proveedor implements DatosMaestros {
  razonSocial: string;
  cif: string;

  constructor(razonSocialIn: string, cifIn: string) {
    this.razonSocial = razonSocialIn;
    this.cif = cifIn;
  }

  getCif(): string {
    return this.cif;
  }

  setCif(cif: string): void {
    this.cif = cif;
  }
}

// Herencia en TypeScript

class Employee {
  name: string;
  protected age: number; // Accesible desde clases que hereden de Employee
  private mobileNumber: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.mobileNumber = "";
  }

  // getters y setters...
}

class Manager extends Employee {
  role: string;

  constructor(name: string, age: number, role: string) {
    super(name, age);
    this.role = role;
  }

  // getters y setters de las propiedades de esta clase
}
