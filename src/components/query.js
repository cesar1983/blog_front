import { useQuery } from '@apollo/react-hooks'

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  })

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {JSON.stringify(error)}</p>
  return children({ data })
}

export default Query
