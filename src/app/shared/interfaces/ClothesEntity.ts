export interface ClothesEntity {
  uid?: string,
  anotimp?: 'SPRING' | 'SUMMER' | 'AUTUMN' | 'WINTER',
  material?: 'BUMBAC' | 'POLIESTER' | 'SATIN' | 'BLANA'| 'PIELE'| 'TEXTIL',
  tip_haina?: 'TRICOU' | 'FUSTA' | 'PANTALONI_LUNGI' | 'PANTALONI_SCURTI'| 'SACOU'| 'BLUZA'| 'GEACA'| 'ADIDASI'| 'PANTOFI'| 'HANORAC',
  color?: string
}
