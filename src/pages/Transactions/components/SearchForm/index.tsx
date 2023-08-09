import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
<<<<<<< HEAD
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
=======
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af

const searchFormSchema = z.object({ query: z.string() })

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchForm() {
<<<<<<< HEAD
  const { fetchTransactions } = useContext(TransactionsContext)

=======
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

<<<<<<< HEAD
  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
=======
  function handleSearchTransaction(data: SearchFormInputs) {
    console.log(data)
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
<<<<<<< HEAD
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
=======
        type='text'
        placeholder='Busque por transações'
        {...register('query')}
      />

      <button
        type='submit'
        disabled={isSubmitting}
      >
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
