import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as z from 'zod'
<<<<<<< HEAD
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
=======
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

<<<<<<< HEAD
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

=======
type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModal() {
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
<<<<<<< HEAD
    control,
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: 'income' },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data)

    reset()
=======
  } = useForm({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    console.log(data)
>>>>>>> c7b5a9ac596a15b0eb3af7b96e08725e6e5b12af
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type='text'
            {...register('description')}
            required
            placeholder='Descrição'
          />
          <input
            type='number'
            required
            placeholder='Preço'
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type='text'
            required
            placeholder='Categoria'
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    value='income'
                    variant='income'
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    variant='outcome'
                    value='outcome'
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button
            disabled={isSubmitting}
            type='submit'
          >
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
