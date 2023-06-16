//Função para fazer o login com base no e-mail e senha 
async function loginUser(email, password){
//Tentativa de login c base no email e senha
    try{
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return "Sucesso";
    } catch(error){
        console.error(error);
    }
}

document.getElementById("btnLogin").addEventListener("click",async (event)=>{
    event.preventDefault();

    // Pegar email e senha do usuário com base no ID
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await loginUser(email,password);
    //verifico se o retorno da função é sucesso
    if(result =="Sucesso"){
        //Envio o usuário para a tela após logar
        window.location.href = "home.html";
    } else {
        alert("Erro ao fazer o login");
    }
});