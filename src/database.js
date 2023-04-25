const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};
//utilizado como banco de dados temporário
const produtos = {};

//Cadastrar o produto
function saveProduto(produto){
    //Se o produto não tiver um ID gera automaticamente um id para o produto
    if(!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;
}

function updateProduto(id,newData){
    const produto = produtos[id]
    Object.assign(produto, newData)
    return produto;
}

//Retorna os produtos cadastrados
function getProdutos(){
    return Object.values(produtos);
}

//Retorna um único produto pelo ID
function getProduto(id){
  return produtos[id] || {};
}

//Deleta um produto pelo ID
function deleteProduto(id){
  const produto = produtos[id]
  delete produtos[id]
  return produto
}
module.exports = {saveProduto, getProdutos, getProduto, deleteProduto,updateProduto}