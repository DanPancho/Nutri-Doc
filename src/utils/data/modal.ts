import { SweetAlertIcon, SweetAlertOptions, SweetAlertPosition } from "sweetalert2";

export const ModalData = (
  message: string,
  icon: SweetAlertIcon,
  position: SweetAlertPosition,
  showConfirmButton = false
): SweetAlertOptions<any, any> => {
  return {
    position: position,
    icon: icon,
    title: message,
    showConfirmButton: showConfirmButton,
    timer: 1500,
  };
};
