export default function Register(){
    return(
        <>
            <h1>Registrati</h1>

            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="inserisci il tuo nome"/>
                </div>
                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="inserisci la tua email"/>
                </div>
                  <div>
                    <label>Password</label>
                    <input type="password" placeholder="inserisci la tua password"/>
                </div>

                <button type="button">Registrati</button>
                
            </form>
        </>
    )
}