// import User from '@/classes/User.class'
// import { setUser, setUserList } from '../slices/userSlice'

// const userInstance = new User()

// // export function createUser(data) {
// //     return async (dispatch) => {
// //         try {
// //             dispatch(setLoading(true))
// //             await userInstance.createUser(data)
// //             dispatch(getUserList())
// //             dispatch(showToast('success', 'Created successfully'))
// //             dispatch(setLoading(false))
// //         } catch (error) {
// //             dispatch(showToast('error', error.response.data.message || error.response.data.error))
// //             dispatch(setLoading(false))
// //         }
// //     }
// // }
// export const getProfile = () => async (dispatch:any) => {
//     try {
//         const res = await userInstance.profile()
//         dispatch(setUser(res))

//     } catch (error) {
//         console.log(error)
//     }
// }
