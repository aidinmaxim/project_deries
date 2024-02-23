import IShow from "./Show"

export default interface IShowsState {
  shows: IShow[]
  error?: null | string
  isLoading?: boolean
}