const express = require ("express");
const path = require ("path");
const downloadRoutes = require ("./routes/downloadRoutes");
const homeRoutes = require ("./routes/homeRoutes");

const app = express();


app.use("/", homeRoutes);

// Servir arquivos estáticos (como uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//rota de download

app.use("/download", downloadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
}
)