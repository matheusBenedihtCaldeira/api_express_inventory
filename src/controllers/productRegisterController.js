const ProductModel = require('../models/ProductModel.js');
const {OpenAIApi} = require('openai');
const configAi = require('../config/openAi.js')
const openAi = new OpenAIApi(configAi);

//Gera automaticamente a descrição do produto a partir do seu nome
const gerarDescricao = async (nomeDoProduto) => {
    const prompt = `Gere a descrição do seguinte produto ${nomeDoProduto}`

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
//Armazena o produto no banco de dados
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

exports.page = (req,res)=>{
    res.render('index')
}


