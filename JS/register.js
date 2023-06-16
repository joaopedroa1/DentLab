//função para registro
async function registerUser(email, password, event){ //async significa que trabalha cm dados futuros
    event.preventDefault(); //Evento é TUDO que acontece num site. Alguns navegadores possuem eventos padrões que atrapalham o site, e esse código evita tais eventos 
    try{
        //faz o processo de autenticação passando email e senha
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        //Insere os dados no banco de dados, acessando a coleção users
        await db.collection("users").doc(user.uid).set(
        {
            email: email,
            uid: user.uid
        }
    );
    alert("Cadastro realizado com sucesso")
    } catch(error){
        console.log(error);
    } //Tentar fazer algo, é tipo um if e else voltado pra erros
}

//pegar os dados do form e inserir na função
document.getElementById("registerButton").addEventListener("click", async (event)=>{
    //pega os dados do form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    //valida se são iguais
    if(password !== confirmPassword){
        alert("Senhas não são iguais");
    }
    //insere os dados na função
    registerUser(email, password, event);
} );