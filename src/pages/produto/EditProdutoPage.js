import './EditProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Editar Produto';

class EditProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <form id="form-produto">
<div style="display:flex; justify-content:center;">
<select id="selecionarProduto">
    <option value="">Selecione um produto</option>
</select>
</div>

<div id="areaEdicao" style="display: none; margin-top: 20px;">
    <ion-input type="text" id="nome" placeholder="Nome do produto"></ion-input>
    <ion-input type="number" id="preco" placeholder="Preço"></ion-input>
    <ion-item>
    <ion-button id="btnSalvar">Salvar</ion-button>
    </ion-item>
</div>
                </form>
            </ion-content>
            
        `;
        this.querySelector('#logout-btn')
            .addEventListener('click', logout);

        const produtos = [
            { id: 1, dsc_produto: "Macarronada", valor_unit: 20.99 },
            { id: 2, dsc_produto: "Sopa", valor_unit: 18.49 },
            { id: 3, dsc_produto: "Feijoada", valor_unit: 33.99 },
            { id: 4, dsc_produto: "Cenoura", valor_unit: 10.39}
        ];

        const select = this.querySelector('#selecionarProduto');
        const areaEdicao = this.querySelector('#areaEdicao');
        const nomeInput = this.querySelector('#nome');
        const precoInput = this.querySelector('#preco');

        produtos.forEach(produto => {
            const option = document.createElement('option');
            option.value = produto.id;
            option.textContent = produto.dsc_produto;
            select.appendChild(option);
        });


        select.addEventListener('change', () => {
            const id = select.value;

            const produto = produtos.find(p => p.id == id);

            if (produto) {

                areaEdicao.style.display = 'block';

                nomeInput.value = produto.dsc_produto;
                precoInput.value = produto.valor_unit;
            } else {
                areaEdicao.style.display = 'none';
            }
        });
        const btnSalvar = this.querySelector('#btnSalvar');

        btnSalvar.addEventListener('click', () => {
            const id = select.value;
            const produto = produtos.find(p => p.id == id);

            if (produto) {
                produto.dsc_produto = nomeInput.value;
                produto.valor_unit = parseFloat(precoInput.value);

                alert("Produto atualizado!");
                console.log(produtos);
            }
        });


    }
}

customElements.define('edit-produto-page', EditProdutoPage);