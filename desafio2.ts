enum Emprego {
    Atriz,
    Pedreiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Emprego
}


let pessoa1: Humano = {
    nome: "Maria",
    idade: 29,
    profissao: Emprego.Atriz
}

let pessoa2: Humano = {
    nome: "Roberto",
    idade: 19,
    profissao: Emprego.Pedreiro
}

let pessoa3: Humano = {
    nome: "Laura",
    idade: 32,
    profissao: Emprego.Atriz
};

let pessoa4: Humano = {
    nome:"Carlos",
    idade: 19,
    profissao: Emprego.Pedreiro
}

