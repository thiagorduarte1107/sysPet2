import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  returnUrl: string = '/';
  loading: boolean = false;
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obter URL de retorno dos parâmetros da rota ou usar o padrão '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    // Verificar se o usuário já está logado
    if (this.authService.isLoggedIn()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.error = '';
    
    this.authService.login(this.email, this.password)
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: err => {
          this.error = 'Falha na autenticação. Verifique suas credenciais.';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}