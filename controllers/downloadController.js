const path = require ("path");
const fs = require('fs'); // Importa fs se necessário para outras operações

const downloadFile = (req, res) =>{
  const fileName = req.params.filename; // O nome do arquivo será passado como parâmetro na URL
  
  // caminho concatenado pelo path
  const filePath = path.join(__dirname, "../uploads", fileName); // Caminho completo onde o arquivo esta armazenado para download
  
  //Verifica se o arquivo existe antes de tentar fazer o download
    fs.access(filePath, fs.constants.F_OK, (err)=>{
        if (err) {
            return res.status(404).send('Arquivo não encontrado');
          }

  //Envia o arquivo para o cliente
  res.download(filePath, fileName, (err) =>{

    if(err){
        res.status(500).send({
            message: "Erro ao baixar arquivo. ",
            error: err.message
        });
    }
  });
});

};

module.exports = {
    downloadFile
}