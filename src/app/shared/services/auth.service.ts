import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'collaborator' | 'customer';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private isAuthenticated = false;

  constructor() {
    // Verificar se há um usuário no localStorage ao iniciar o serviço
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
      this.isAuthenticated = true;
    }
  }

  login(email: string, password: string): Observable<User> {
    // Simulação de autenticação - em um ambiente real, isso seria uma chamada API
    // Aqui estamos apenas simulando um login bem-sucedido para um colaborador
    const mockUser: User = {
      id: 1,
      name: 'Colaborador Teste',
      email: email,
      role: 'collaborator'
    };

    return of(mockUser).pipe(
      tap(user => {
        this.isAuthenticated = true;
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isCollaborator(): boolean {
    const user = this.getCurrentUser();
    return !!user && (user.role === 'collaborator' || user.role === 'admin');
  }
}