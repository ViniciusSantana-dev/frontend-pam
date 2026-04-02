import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js'; 

const pageName = 'Usuário';

class UsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}

            <ion-content>
                <div class="cadastroUsuario" style=" display:flex; justify-content:center; margin-top: 3%;" > 
                <ion-list>
                    <ion-input type="text" placeholder="Escreva o nome de usuario desejado" label="Nome de Usuario" name="nomeUsuario"></ion-input>
                    <ion-input type="password" placeholder="Escreva uma senha" label="Senha" name="senhaUsuario"></ion-input>
                    <ion-input type="password" placeholder="Comfirma a senha" label="Confirmar senha" name="confSenhaUsuario"></ion-input>
                    <ion-button type="submit" >Cadastrar</ion-button> 
                    </ion-list>
                    </div>

            </ion-content>


        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);

    /* cadastrarUsuario(){
            return[
            
            ]
        }*/
        
    }
}

customElements.define('usuario-page', UsuarioPage);