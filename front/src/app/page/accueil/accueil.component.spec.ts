import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AccueilComponent } from './accueil.component'

describe('AccueilComponent', () => {
  let component: AccueilComponent
  let compiled: HTMLElement
  let fixture: ComponentFixture<AccueilComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent]
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
})
