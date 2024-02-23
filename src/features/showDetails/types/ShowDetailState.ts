import IShowDetails from "./ShowDetails"

export default interface IShowsState {
  showDetails: IShowDetails
  error?: null | string
  isLoading?: boolean
}