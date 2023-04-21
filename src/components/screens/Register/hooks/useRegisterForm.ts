import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterPayload } from 'src/@types/User'
import getAuthService from 'src/services/authService'
import { AxiosError } from 'axios'
import { ServiceError } from 'src/@types/ServiceError'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirm: Yup
    .string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Password confirmation is required')
})

type RegisterFormData = {
  passwordConfirm: string
} & RegisterPayload

export default function useRegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(async data => {
    try {
      await getAuthService().register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      })
      toast.success('Register Succesful')
    } catch (error) {
      const axiosError = error as AxiosError
      const serviceErrorResponse = axiosError.response?.data as ServiceError
      toast.error(serviceErrorResponse.message)
    }
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
