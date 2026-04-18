export default function Login(){
    return(
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="inserisci la tua email"/>
                </div>
                <div>
                    <label type="password" placeholder="inserisci la tua password"/>
                </div>

                <button type="button">Login</button>
            </form>
        </>
    )
}