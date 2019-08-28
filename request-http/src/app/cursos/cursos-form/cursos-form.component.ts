import { ActivatedRoute } from "@angular/router";
import { CursosService } from "./../cursos-lista/cursos.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { map, switchMap, catchError } from "rxjs/operators";
import { Curso } from '../cursos-lista/curso';
import { empty } from 'rxjs';

@Component({
  selector: "app-cursos-form",
  templateUrl: "./cursos-form.component.html",
  styleUrls: ["./cursos-form.component.scss"]
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  cursando:Curso;
  cursos$: any;
  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   const curso = this.route.snapshot.data['curso'];
    this.form = this.fb.group({
      id: [curso.id],

      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
      ]
    });
  }
  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.is,
  //     nome: curso.nome
  //   });
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value) ;
    if (this.form.valid) {
      console.log("submit");
      if(this.form.value.id){
        //update
        this.service.update(this.form.value).subscribe(
          success => {
            alert("Curso atualizado com sucesso")
            console.log("atualização com exito");
            this.location.back();
          }
        )
      }else{
        //create
        this.service.create(this.form.value).subscribe(
          success => {
            alert("Curso criado com sucesso")
            console.log("sucesso");
            this.location.back();
          },
          error => alert('erro ao criar o curso'),
          () => console.log("request ok")
        );
      }
      
    }
  }
  
 
 
  onCancel() {
    this.submitted = true;
    this.form.reset();
    console.log("onCancel");
  }
   
}
