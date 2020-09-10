import Swal from 'sweetalert2'

export class Loading {
  private static tratamento() {
    let html: any = document.getElementsByTagName("html")[0];
    let body: any = document.getElementsByTagName("body")[0];
    html.classList.remove("swal2-height-auto");
    body.classList.remove("swal2-height-auto");
  }
  static show = (title = "Carregando...") => {
    Swal.fire({
      width: "100%",
      imageUrl: "/assets/svg/loading2_hide.svg",
      imageHeight: 100,
      imageAlt: title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      background: 'transparent',
      backdrop: `
        rgba(0,0,123,0.4)
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        border-radius: 0 !important;
        background-color: transparent !important;
      `
    });
    Loading.tratamento();
  }
  static hide = () => {
    Swal.fire({
      animation: false,
      heightAuto: false,
      width: "100%",
      grow: "fullscreen",
      imageUrl: "/assets/svg/loading2_hide.svg",
      imageHeight: 100,
      imageAlt: "loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      timer: 1000,
      background: 'transparent',
      backdrop: `
        rgba(0,0,123,0.4)
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        border-radius: 0 !important;
        background-color: transparent !important;
      `
    });
    Loading.tratamento();
  }
}
