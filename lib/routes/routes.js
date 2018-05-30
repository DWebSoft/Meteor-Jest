Router.configure({
	layoutTemplate: 'main_layout'
});

Router.route('/jokes', function () {
  this.render('jokes');
});

Router.route('/', function () {
  this.render('login');
});