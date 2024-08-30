import ArtItem from "../components/ArtItem";

import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

import { ADD_ARTWORK, DELETE_ARTWORK } from "../graphql/mutations"
import { GET_USER_ARTWORK, GET_ALL_ARTWORK } from "../graphql/queries"


const initialFormData = {
    name: '',
    weapon: '',
    headbandColor: ''
}

function Dashboard() {
    const [formData, setFormData] = useState(initialFormData)
    const [addArtwork] = useMutation(ADD_ARTWORK, {
        variables: formData,
        refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    })
    const [deleteArtwork] = useMutation(DELETE_ARTWORK, {
        refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    })
    const { data: artworkData } = useQuery(GET_USER_ARTWORK)

    if (artworkDataData) {
        console.log(addArtworkData)
    }

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const res = await addArtwork()

        console.log(res)

        setFormData({
            ...initialFormData
        })
    }

    const handleArtwork = async (id) => {
        await deleteArtwork({
            variables: {
                artwork_id: id
            }
        })
    }

    return (

        <div>

        </div>




    )

}