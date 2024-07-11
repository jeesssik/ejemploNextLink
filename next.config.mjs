/** @type {import('next').NextConfig} */



// esta linea hace que el componente de navegacion (y otros) no renderice 2 veces
// al iniciar la app
const nextConfig = {
    reactStrictMode: false
  }
  
  export default nextConfig;