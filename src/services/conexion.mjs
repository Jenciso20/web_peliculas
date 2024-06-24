import pg from 'pg';
const {Client}= pg;

const config={
    user: 'db_movies_3x8z_user',
    host: 'dpg-cpsbv4aj1k6c738krgc0-a.oregon-postgres.render.com',
    database: 'db_movies_3x8z',
    password: 'bze4QBTNFq8rh26iwc47TTcSOsST3bI8',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
export async function Conectar(){
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log('Conectado a la base de datos')
    } catch(error){
        console.log(error)
    }
}
export async function TraerPeliculas(){
    const cliente= new Client(config)
    try{
        await cliente.connect()
        const res= await cliente.query('SELECT*FROM peliculas')
        return res.rows
    }catch(error){
        console.log(error)
    }
}