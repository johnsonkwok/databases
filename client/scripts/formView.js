var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    

    var message = {
      username: App.username,
      message: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };
    // var message = {
    //   username: 'jack',
    //   message: 'jack,',
    //   roomname: 'jack'
    // };

    $('#message').val('');

    Parse.create(message, (data) => {

      console.log(message, 'do i get in');
      console.log(data);
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};