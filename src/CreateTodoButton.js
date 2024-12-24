function CreateTodoButton( ){
    return (
        <form >
            <div style={{
                display: 'flex',
                width: '100%'
            }}>
                <input type="text" style={{
                    flex:1
                }} ></input>
                <button type="button" style={{
                    margin:"auto"
                }} onClick={
                    (event)=> {
                        console.log('Hola mundi')
                        console.log(event.target)
                    }
                    }>Agregar</button>
            </div>
           

        </form>
    )
}

export {CreateTodoButton}