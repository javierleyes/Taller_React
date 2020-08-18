import axios from 'axios'

export const addInterceptor = () => {

    // request salientes
    axios.interceptors.request.use(
        request => requestHandler(request)
    )

    const requestHandler = (request) => {
        console.log("request interceptada", request)
        // agrego el token
        return request
    }

    // response entrante
    axios.interceptors.response.use(
        response => responseHandler(response),
        error => errorResponseHandler(error)
    )

    const responseHandler = (response) => {
        console.log("response interceptada", response)
        return response
    }

    const errorResponseHandler = (error) => {
        console.log("error response interceptada", error)
        return error
    }
}



