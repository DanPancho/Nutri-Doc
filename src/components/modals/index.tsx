import { ModalData } from '@/utils/data/modal'
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'

const ModalSweet = async (message: string,
    icon?: SweetAlertIcon | undefined,  position?: SweetAlertPosition | undefined) => {
  return (
   await Swal.fire(ModalData(message, icon ? icon : 'success', position ? position : 'center'))
  )
}

export default ModalSweet