import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { ClientService } from 'src/app/services/client.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  form : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService,
    private authentificationService : AuthentificationService, private toastController : ToastController) { 
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      postnom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_repeat: ['', Validators.required],
    }, { 
      validator: MustMatch('password', 'password_repeat')
    })
  }

  get f() { return this.form.controls; }

  ngOnInit() {
  }

  inscription() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const values = this.form.value
    this.clientService.register(values).then(
      val => {
        if (val.state) {
          this.authentificationService.login(values.email, values.password)
        } else {
          this.presentToast(val.msg || "Enregistrement echoué")
        }
      }
    )
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}
