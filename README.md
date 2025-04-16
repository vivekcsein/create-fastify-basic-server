<h1>
A begginer level node fastify server template with 1 min created in bun for faster backend web server development
</h1>

<p>
create a folder ( name = fastifyserver)
</p>

<p>
create package.json using this command on terminal and choose blank template
</p>     
<p>

       bun init

</p>
       
       bunx init -y
</p>
<h2>
1. create "src" folder & create a file name "app.ts"
</h2>
<p>

    mkdir src && cd src &&  echo.> app.ts && cd ..

</p>

<p>
    Install dependencies
</p>

    bun add fastify fastify-plugin @fastify/cors dotenv

<p>

<p>
    Install Devlopment dependencies
</p>
</p>

    bun add --dev nodemon rimraf prettier

<p>
<p>
    Install type dev dependencies
</p>
</p>

    bun add --dev @types/cors @types/uuid

<p>

<p>

</p>
