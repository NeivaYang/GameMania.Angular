import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit(): void {
  }

  userModel = new User()

  mensagem = ""

  usuarioLogado = ""

  acesso(){
    console.log(this.userModel)

    //this.loginService.login(this.userModel).subscribe((response) => {
      //console.log(response)
    //})
    let erroEncontrado = 0;

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      console.log("palavra atual:", palavra)
      
    if (this.userModel.email?.toLowerCase().includes(palavra)) {
      console.log("Palavra encontrada:", palavra)
      this.mensagem = "Dados inválidos: " + palavra;
      erroEncontrado = 1;
        
      }

      

    })

    if (erroEncontrado == 0) {
      this.loginService.login(this.userModel).subscribe( (response) => {
        this.usuarioLogado = response.body.user.nome
        // console.log(response)
        console.log(this.usuarioLogado)
        this.router.navigateByUrl('')
      }, (respostaErro) => {
        this.mensagem = respostaErro.error
      })      
    }
  }

  

}
