import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StartGameApi } from '../../../api/creer-partie'

import { AccueilComponent } from './accueil.component'

describe('AccueilComponent', () => {
  let component: AccueilComponent
  let compiled: HTMLElement
  let fixture: ComponentFixture<AccueilComponent>

  const startGameStub = {
    execute: jest.fn()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{
        provide: StartGameApi,
        useValue: startGameStub
      }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent)
    component = fixture.componentInstance
    compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('crée un input en plus par rapport au nombre de joueurs déjà saisis', () => {
    // Given
    component.joueurs = ['jeje', 'nico', 'stan']

    // When
    fixture.detectChanges()

    // Then
    expect(compiled.querySelectorAll('.joueurs')).toHaveLength(3)
  })

  it('quand on clique sur le bouton on démarre la partie', () => {
    // Given
    component.joueurs = ['jeje', 'nico', 'stan']
    compiled.querySelector('button').dispatchEvent(new Event('click'))
    // When
    fixture.detectChanges()

    // Then
    expect(startGameStub.execute).toHaveBeenCalled()
  })
})
