import { GenreEnumType } from '@/types'

export interface GenresBlockProps {
    genres: GenreEnumType[]
    onChange: (genre: GenreEnumType) => void
}