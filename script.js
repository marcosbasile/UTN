// Formulario cotizacion
$(document).ready(() => {
    const form = $('#contact-form1');
    const status = $('#status');
    
    form.submit((event) => {
      event.preventDefault();
      const name = $('#name').val();
      const phone = $('#phone').val();
      const address = $('#address').val();
      const furnitureType = $('#type').val();
      const observations = $('#observations').val();
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('type', type);
      formData.append('observations', observations);
      
      $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
          status.html('Gracias por contactarte con nosotros!');
          form[0].reset();
          console.log(data)
        },
        error: () => {
          status.html('Oops! Hubo un problemirijillo!');
        }
      });
    });
  });
  


// Formulario
const form1 = $('#contact-form');
const status1 = $('#status');

form1.submit((event) => {
  event.preventDefault();
  const name1 = $('#name').val();
  const email = $('#email').val();
  const message = $('#message').val();

  $.ajax({
    type: 'POST',
    url: 'https://reqres.in/api/users',
    data: { name1, email, message },
    success: (data) => {
      status1.html('Gracias por contactarte con nosotros!');
      form1[0].reset();
      console.log(data)
    },
    error: () => {
      status1.html('Oops! Hubo un problemirijillo!');
    }
  });
});
