const gql = String.raw;

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  # type Artwork {
  #   _id: ID
  #   title: String
  #   description: String
  #   imageUrl: String
  #   artist: User
  #   createdAt: String
  #   # comments: [Comment]
  # }

  type Response {
    message: String
  }

  type AuthResponse {
    message: String
    user: User
  }

  type Query {
    getUser: AuthResponse
    getArtwork(id: ID): Artwork
    getAllArtworks: [Artwork]
  }

  type Mutation {
    # User Mutations
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse

    # # Artwork Mutations
    # addArtwork(title: String!, description: String, imageUrl: String!): Artwork
    # updateArtwork(id: ID!, title: String, description: String, imageUrl: String): Artwork
    # deleteArtwork(id: ID!): Response

  }
`;

module.exports = typeDefs;