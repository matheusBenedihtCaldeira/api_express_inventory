const ProductModel = require('../models/ProductModel.js');
const {OpenAIApi} = require('openai');
const configAi = require('../config/openAi.js')
const openAi = new OpenAIApi(configAi);

const gerarDescricao = async (nomeDoProduto) => {
    const prompt = `Pense como um vendedor fazendo a descrição do seguinte produto ${nomeDoProduto}`

    try{
        const completion = await openAi.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 2048
        });
        return completion.data.choices[0].text.trim();
    }catch(error){
        console.log(error);
    }
};


exports.page = (req,res)=>{
    res.render('index')
}


//Função responsável por registrar um produto no banco de dados
exports.register = async(req, res) => {
    const {nome,preco,quantidade} = req.body;

    const produto = new ProductModel({
        nome,
        preco,
        quantidade,
        descricao: await gerarDescricao(nome),
    });
    try{
        await produto.save();
        res.send(`${produto}\nProduto salvo com sucesso!`)
    
    }catch(err){
        res.send(err)
    }
}