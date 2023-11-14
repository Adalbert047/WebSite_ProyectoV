// function 


function getForm()
{
    const user_ = document.querySelector("#user")
    const password_ = document.querySelector("#password")


    if(user_.value.trim() === "" || password_.value.trim() === "")
    {
        alert("Complete los campos")
        return;
    }


    const data = 
    {
        user: user_.value,
        password: password_.value
    }

    connectAPI(data)
}


function connectAPI(data)
{
    const p = document.querySelector("#message")
    const btn = document.querySelector("#btnlogin")
    btn.style.display = "none"
    p.textContent = "Validando usuario..."
    p.style.color = "white"


    //Uso de Fetch, parametros, recibe un objeto, en donde tenemos los siguientes atributos, dentro de esta tenemos el objeto de nuestro usuario
    fetch("https://dummyjson.com/auth/login", 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": data.user, 
            "password": data.password
        })
    })
    .then(response => response.json())
    .then((e) => {



        
        if(!e?.token)
        {
            setTimeout(() => {
                p.style.color = "red"
                p.textContent = "Usuario o contraseña incorrectos"
                btn.style.display = "inline-block"
            }, 3000);


            
            return
        }
        else
        {
            location.href = "https://google.com"

        }
        console.log(e)

        
    })
    .catch(err => {
         console.log(err)
    })
    
}