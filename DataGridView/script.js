const configDGV  = {
    endpoint: "http://127.0.0.1:1880/produtos",
    idDestino: "DGVDados",
}

const DataGridView = () => {
    const DGVDados = document.getElementById(configDGV.idDestino)
    DGVDados.innerHTML = "";

    fetch(configDGV.endpoint)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        res.forEach(el => {
            const DGVLinha = document.createElement("div");
            DGVLinha.setAttribute("class","DGVLinha");

            const c1 = document.createElement("div");
            c1.setAttribute("class","c1 coluna");
            c1.innerHTML = el.n_id_produto;
            DGVLinha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class","c2 coluna");
            c2.innerHTML = el.s_nome_produto;
            DGVLinha.appendChild(c2);

            const c3 = document.createElement("div");
            c3.setAttribute("class","c3 coluna");
            c3.innerHTML = el.s_marca_produto;
            DGVLinha.appendChild(c3);

            const c4 = document.createElement("div");
            c4.setAttribute("class","c4 coluna");
            c4.innerHTML = el.s_modelo_produto;
            DGVLinha.appendChild(c4);

            const c5 = document.createElement("div");
            c5.setAttribute("class","c5 coluna");
            DGVLinha.appendChild(c5);

            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("class","dvgIcone");
            imgDelete.setAttribute("src","deletar.svg");
            imgDelete.addEventListener("click", (evt) =>{
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const linha = evt.target.parentNode.parentNode;
                const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`
                fetch(endpoint)
                .then(res =>{
                    if(res.status == 200){
                        linha.remove()
                    }
                })
            })
            c5.appendChild(imgDelete);

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("class","dvgIcone");
            imgEditar.setAttribute("src","editar.svg");
            imgEditar.addEventListener("click", (evt) =>{
                document.querySelector("#janelaEditar").classList.remove("ocultar")
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint = `http://127.0.0.1:1880/produtos/${id}`
                fetch(endpoint)
                .then(res => res.json())
                .then(res => {
                    document.querySelector("#f_idEditar").value = res[0].n_id_produto
                    document.querySelector("#f_produtoEditar").value = res[0].s_nome_produto
                    document.querySelector("#f_marcaEditar").value = res[0].s_marca_produto
                    document.querySelector("#f_modeloEditar").value = res[0].s_modelo_produto
                })
            })
            c5.appendChild(imgEditar);

            const imgExibir = document.createElement("img");
            imgExibir.setAttribute("class","dvgIcone");
            imgExibir.setAttribute("src","exibir.svg");
            imgExibir.addEventListener("click", (evt) =>{
                document.querySelector("#janelaView").classList.remove("ocultar")
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint = `http://127.0.0.1:1880/produtos/${id}`
                fetch(endpoint)
                .then(res => res.json())
                .then(res => {
                    document.querySelector("#f_id").value = res[0].n_id_produto
                    document.querySelector("#f_produto").value = res[0].s_nome_produto
                    document.querySelector("#f_marca").value = res[0].s_marca_produto
                    document.querySelector("#f_modelo").value = res[0].s_modelo_produto
                })
            })
            c5.appendChild(imgExibir);

            DGVDados.appendChild(DGVLinha);
        });
    })
}

DataGridView(configDGV)

document.querySelector(".btn").addEventListener("click", (evt) =>{
    document.querySelector(".janelaView").classList.add("ocultar")
})

document.querySelector("#btnEditar").addEventListener("click", (evt) =>{
    const id = document.querySelector("#f_idEditar").value
    const produto = document.querySelector("#f_produtoEditar").value
    const marca = document.querySelector("#f_marcaEditar").value
    const modelo = document.querySelector("#f_modeloEditar").value

    const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`
    fetch(endpoint)
    .then(res => {
        if(res.status == 200){
            document.querySelector("#janelaEditar").classList.add("ocultar")
            DataGridView(configDGV)
        }else{
            alert("Erro ao atualizar.")
        }
    })
})

document.querySelector("#btnCancelar").addEventListener("click", (evt) =>{
    document.querySelector("#janelaEditar").classList.add("ocultar")
})
