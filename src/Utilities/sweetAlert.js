import Swal from "sweetalert2";
import "./common.css"
import 'animate.css';


export function autoCloseAlert(icon, msg){
  Swal.fire({
    icon: icon,
    title: msg,
    showConfirmButton: false,
    timer: 1500
  });
}

function sweetAlert(icon, msg){
  return Swal.fire({
    title: msg,
    icon:icon,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__slow
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__hinge
        animate__slow
      `
    },
    buttonsStyling: true,
    showCancelButton: true,
    // customClass: {
    //   confirmButton: 'btn_confirm',
    //   cancelButton: 'btn_denied',
    // },
})
}

export default sweetAlert;