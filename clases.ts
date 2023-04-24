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
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setGoles(goles: number): void {
    this.goles = goles;
  }

  setApellido(apellidos: string): void {
    this.apellidos = apellidos;
  }

  //Método getter
  getGoles(): number {
    return this.goles;
  }

  getNombre(): string {
    return this.nombre;
  }

  getApellido(): string {
    return this.apellidos;
  }
}

let jugador1 = new Jugador("Lionel", "Messi"); //Instacia o crear el objeto Jugador
jugador1.setGoles(13); // Asignamos un 5 al atributo goles con este método setter
let jugador11 = new Jugador("Carles", "Pujol");
jugador11.setGoles(5);
console.log(jugador1.getGoles()); // 13
console.log(jugador11.getGoles()); // 5

// Clases con constructor breve (si declaramos los parámetros del constructor con
// modificador de acceso se crean las propiedades con el mismo nombre)

class Player {
  //Atributos
  //En el constructor
  constructor(
    public name: string,
    public surname: string,
    private goals: number
  ) {
    //Tampoco hace falta asignarle los valores  "this.name = name;"
  }

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
  //   backgroundColor: 'green' // Al ser opcional si no se incluye no arroja error
};

//Otro ejemplo de interfaz:

interface Persona {
  nombre: string;
  edad: number;
  correo: string;
  direccion?: string;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
  correo: "marc@miweeb.com",
  direccion: "Calle 123",
};

let persona2: Persona = {
  nombre: "María",
  correo: "persona2@miweeb.com",
  edad: 25,
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
    //Modificador por defecto "public"
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
