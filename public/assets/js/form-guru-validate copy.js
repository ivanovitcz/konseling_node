/* jquery validate */
$(document).ready(function () {
  $('#form-input').validate({
    rules: {
      username: {
        required: true,
      },
      password: {
        required: true,
      },
      nip: {
        required: true,
        digits: true
      },
      nama: {
        required: true,
      },
      image: {
        required: true,
        extension: "png|jpe?g",
        maxsize: 2000000,
      },
      agama: {
        required: true,
      },
      notelp: {
        required: true,
      },
      alamat: {
        required: true,
      },
      status: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "Username Harus Diisi!",
      },
      password: {
        required: "Password Harus Diisi!",
      },
      nip: {
        required: "NIP Harus Diisi!",
        digits: "NIP Harga Harus Angka!"
      },
      nama: {
        required: "nama Harus Diisi!",
      },
      image: {
        required: "Gambar Harus Diisi!",
        extension: "Ekstensi png, jpg dan jpeg",
        maxsize: "Gambar Harus Kurang dari 2 MB"
      },
      agama: {
        required: "Agama Harus Diisi!",
      },
      notelp: {
        required: "No Telepon Harus Diisi!",
      },
      alamat: {
        required: "Alamat Harus Diisi!",
      },
      status: {
        required: "Status Harus Diisi!",
      },
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    },
  });
});