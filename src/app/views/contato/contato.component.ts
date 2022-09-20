import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  mensagem(){
    let mmensagem = document.getElementById("mensagem")
    console.log(mmensagem)
    alert("mensagem enviada com sucesso")
  }
}
