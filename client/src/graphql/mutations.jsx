import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation LoginUser($email: String, $password: String) {
  loginUser(email: $email, password: $password) {
    message
    user {
      _id
      username
    }
  }
}`

export const REGISTER_USER = gql`
mutation RegisterUser($username: String, $email: String, $password: String) {
  registerUser(username: $username, email: $email, password: $password) {
    message
    user {
      _id
      username
    }
  }
}`

export const LOGOUT_USER = gql`
mutation LogoutUser {
  logoutUser {
    message
  }
}`

export const UPDATE_USER = gql`
mutation UpdateUser($id: ID, $username: String, $email: String) {
  updateUser(id: $id, username: $username, email: $email) {
    username
    email
    _id
  }
}
`

export const ADD_ARTWORK = gql`
	mutation AddArtwork($title: String!, $description: String, $imageUrl: String!, $date: String) {
  addArtwork(title: $title, description: $description, imageUrl: $imageUrl, date: $date) {
    _id

  }
}`

export const UPDATE_ARTWORK = gql`
  mutation UpdateArtwork($id: ID, $imageUrl: String, $description: String, $title: String, $date: String) {
  updateArtwork(id: $id, imageUrl: $imageUrl, description: $description, title: $title, date: $date) {
    _id
  }
}`

export const DELETE_ARTWORK = gql`
	mutation DeleteArtwork($deleteArtworkId: ID!) {
  deleteArtwork(id: $deleteArtworkId) {
    message
  }
}`

export const TOGGLE_FAVORITE = gql`
mutation ToggleFavorite($artworkId: ID!) {
  toggleFavorite(artworkId: $artworkId) {
    message
  }
}
`

